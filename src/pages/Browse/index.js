import React from 'react';
import { useSelector } from 'react-redux';

import Loading from '../../components/Loading';

import {
  Container, Title, List, Playlist,
} from './styles';

function Browse() {
  const playlists = useSelector(state => state.playlists);

  return (
    <Container>
      <Title>
        Navegar
        {playlists.loading && <Loading />}
      </Title>

      <List>
        {playlists.data.map(playlist => (
          <Playlist key={playlist.id} to={`/playlists/${playlist.id}`}>
            <img src={playlist.thumbnail} alt={playlist.title} />
            <strong>{playlist.title}</strong>
            <p>{playlist.description}</p>
          </Playlist>
        ))}
      </List>
    </Container>
  );
}

export default Browse;
