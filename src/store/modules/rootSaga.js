import { all } from 'redux-saga/effects';

import playlists from './playlists/sagas';
import playlistDatails from './playlistDetails/sagas';

export default function* rootSaga() {
  return yield all([playlists, playlistDatails]);
}
