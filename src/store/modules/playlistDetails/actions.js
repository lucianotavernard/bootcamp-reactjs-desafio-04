export function getPlaylistDetailsRequest(id) {
  return {
    type: '@PlaylistDetails/GET_REQUEST',
    id,
  };
}

export function getPlaylistDetailsSuccess(playlist) {
  return {
    type: '@PlaylistDetails/GET_SUCCESS',
    playlist,
  };
}
