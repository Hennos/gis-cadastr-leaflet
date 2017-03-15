import {call, put, takeEvery} from 'redux-saga/effects';

import {events} from '../constants/map.js';

import {
  setAccessToken,
  setGeoJSON,
  signalFailedRequest
} from '../actions/map.js';

import {
  fetchAccessToken,
  fetchGeoJSON
} from '../api/map.js';

function* doRequestAccessToken() {
  try {
    const accessToken = yield call(fetchAccessToken);
    yield put(setAccessToken(accessToken));
  } catch (error) {
    yield put(signalFailedRequest(error));
  }
}

function* doRequestGeoJSON(action) {
  try {
    const dataGeoJSON = yield call(fetchGeoJSON, action.pattern);
    yield put(setGeoJSON(dataGeoJSON));
  } catch (error) {
    yield put(signalFailedRequest(error));
  }
}

export function* watchRequestMapData() {
  yield takeEvery(events.requestAccessToken, doRequestAccessToken);
  yield takeEvery(events.requestGeoJSON, doRequestGeoJSON);
}

