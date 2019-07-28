import Sound from 'react-sound';

const initialState = {
  currentSong: null,
  list: [],
  status: Sound.status.PLAYING,
  position: null,
  positionShown: null,
  duration: null,
  volume: 50,
};

export default function player(state = initialState, action) {
  switch (action.type) {
    case '@Player/LOAD':
      return {
        ...state,
        currentSong: action.song,
        list: action.list,
        status: Sound.status.PLAYING,
      };

    case '@Player/PLAY':
      return { ...state, status: Sound.status.PLAYING };

    case '@Player/PAUSE':
      return { ...state, status: Sound.status.PAUSED };

    case '@Player/NEXT':
      const currentIndexNext = state.list.findIndex(song => song.id === state.currentSong.id);
      const next = state.list[currentIndexNext + 1];

      if (next) {
        return {
          ...state,
          currentSong: next,
          status: Sound.status.PLAYING,
          position: 0,
        };
      }
      return state;

    case '@Player/PREV':
      const currentIndexPrev = state.list.findIndex(song => song.id === state.currentSong.id);
      const prev = state.list[currentIndexPrev - 1];

      if (prev) {
        return {
          ...state,
          currentSong: prev,
          status: Sound.status.PLAYING,
          position: 0,
        };
      }
      return state;

    case '@Player/PLAYING':
      const { position, duration } = action;

      return { ...state, position, duration };

    case '@Player/HANDLE_POSITION':
      return { ...state, positionShown: state.duration * action.percent };

    case '@Player/SET_POSITION':
      return {
        ...state,
        position: state.duration * action.percent,
        positionShown: null,
      };

    case '@Player/SET_VOLUME':
      return { ...state, volume: action.volume };

    default:
      return state;
  }
}
