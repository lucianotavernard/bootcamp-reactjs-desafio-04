import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getPlaylistsRequest } from '../../store/modules/playlists/actions';

import AddPlaylisIcon from '../../assets/images/add_playlist.svg';

import Loading from '../Loading';

import { Container, NewPlaylist, Nav } from './styles';

export default function Sidebar() {
  const playlists = useSelector(state => state.playlists);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaylistsRequest());
  }, [dispatch]);

  return (
    <Container>
      <div>
        <Nav main>
          <li>
            <Link to="/">Navegar</Link>
          </li>
          <li>
            <Link to="/">Rádio</Link>
          </li>
        </Nav>

        <Nav>
          <li>
            <span>Sua Biblioteca</span>
          </li>
          <li>
            <Link to="/">Seu Daly Mix</Link>
          </li>
          <li>
            <Link to="/">Tocadas recentemente</Link>
          </li>
          <li>
            <Link to="/">Músicas</Link>
          </li>
          <li>
            <Link to="/">Albums</Link>
          </li>
          <li>
            <Link to="/">Artistas</Link>
          </li>
          <li>
            <Link to="/">Estações</Link>
          </li>
          <li>
            <Link to="/">Arquivos locais</Link>
          </li>
          <li>
            <Link to="/">Vídeos</Link>
          </li>
          <li>
            <Link to="/">Podcasts</Link>
          </li>
        </Nav>

        <Nav>
          <li>
            <span>PLaylists</span>
            {playlists.loading && <Loading />}
          </li>

          {playlists.data.map(playlist => (
            <li key={playlist.id}>
              <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
            </li>
          ))}
        </Nav>
      </div>

      <NewPlaylist>
        <img src={AddPlaylisIcon} alt="adicionar" />
        Nova Playlist
      </NewPlaylist>
    </Container>
  );
}
