/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { getPlaylistDetailsRequest } from '../../store/modules/playlistDetails/actions';
import { loadSong } from '../../store/modules/player/actions';

import Loading from '../../components/Loading';

import {
  Container, Header, SongList, SongItem,
} from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

export default function Playlist({ match }) {
  const playlistDetails = useSelector(state => state.playlistDetails);
  const currentSong = useSelector(state => state.player.currentSong);

  const [songSelected, setSongSelected] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaylistDetailsRequest(match.params.id));
  }, [dispatch, match]);

  function handleSongClick(id) {
    setSongSelected(id);
  }

  function handleSongDoubleClick(song, songList) {
    dispatch(loadSong(song, songList));
  }

  return playlistDetails.loading ? (
    <Container load>
      <Loading />
    </Container>
  ) : (
    <Container>
      <Header>
        <img src={playlistDetails.data.thumbnail} alt={playlistDetails.data.title} />

        <div>
          <span>playlistDetails.data</span>
          <h1>{playlistDetails.data.title}</h1>
          {!!playlistDetails.data.songs && <p>{playlistDetails.data.songs.length} músicas</p>}

          <button type="button">Play</button>
        </div>
      </Header>

      <SongList>
        <thead>
          <tr>
            <th />
            <th>Título</th>
            <th>Artista</th>
            <th>Álbum</th>
            <th>
              <img src={ClockIcon} alt="Duração" />
            </th>
          </tr>
        </thead>

        <tbody>
          {!playlistDetails.data.songs ? (
            <tr>
              <td colSpan={5}>Nenhuma música cadastrada</td>
            </tr>
          ) : (
            playlistDetails.data.songs.map(song => (
              <SongItem
                key={song.id}
                onClick={() => handleSongClick(song.id)}
                onDoubleClick={() => handleSongDoubleClick(song, playlistDetails.data.songs)}
                selected={songSelected === song.id}
                playing={currentSong && currentSong.id === song.id}
              >
                <td>
                  <img src={PlusIcon} alt="Adicionar" />
                </td>
                <td>{song.title}</td>
                <td>{song.author}</td>
                <td>{song.album}</td>
                <td>3:26</td>
              </SongItem>
            ))
          )}
        </tbody>
      </SongList>
    </Container>
  );
}

Playlist.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
