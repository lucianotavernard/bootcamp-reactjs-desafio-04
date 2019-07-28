const initialState = {
  data: {},
  loading: false,
};

export default function playlistDetails(state = initialState, action) {
  switch (action.type) {
    case '@PlaylistDetails/GET_REQUEST':
      return { ...state, loading: true };

    case '@PlaylistDetails/GET_SUCCESS':
      return { ...state, loading: false, data: action.playlist };

    default:
      return state;
  }
}
