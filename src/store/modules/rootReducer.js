import { combineReducers } from 'redux';

import playlists from './playlists/reducer';
import playlistDetails from './playlistDetails/reducer';
import player from './player/reducer';

export default combineReducers({
  playlists,
  playlistDetails,
  player,
});
