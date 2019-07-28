export function getPlaylistsRequest() {
  return {
    type: '@Playlists/GET_REQUEST',
  };
}

export function getPlaylistsSuccess(playlists) {
  return {
    type: '@Playlists/GET_SUCCESS',
    playlists,
  };
}
