import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';

import api from '../../../services/api';

import { getPlaylistDetailsSuccess } from './actions';

export function* load({ id }) {
  const response = yield call(api.get, `/playlists/${id}?_embed=songs`);

  yield put(getPlaylistDetailsSuccess(response.data));
}

export default all([takeLatest('@PlaylistDetails/GET_REQUEST', load)]);
