import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';

import api from '../../../services/api';

import { getPlaylistsSuccess } from './actions';

export function* load() {
  const response = yield call(api.get, 'playlists');

  yield put(getPlaylistsSuccess(response.data));
}

export default all([takeLatest('@Playlists/GET_REQUEST', load)]);
