const initialState = {
  data: [],
  loading: false,
};

export default function playlists(state = initialState, action) {
  switch (action.type) {
    case '@Playlists/GET_REQUEST':
      return { ...state, loading: true };

    case '@Playlists/GET_SUCCESS':
      return { ...state, loading: false, data: action.playlists };

    default:
      return state;
  }
}
