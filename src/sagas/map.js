import {call, put, takeEvery} from 'redux-saga/effects';

import {events} from '../constants/map.js';
import {setAccessToken, signalFailedRequest} from '../actions/map.js';
import {fetchAccessToken} from '../api/map.js';

function* doFetchAccessToken(action) {
  try {
    const accessToken = yield call(fetchAccessToken);
    yield put(setAccessToken(accessToken));
  } catch (error) {
    yield put(signalFailedRequest(error));
  }
}

export function* watchFetchMapData() {
  yield takeEvery(events.requestAccessToken, doFetchAccessToken);
}

