import {events, map} from "../constants/map.js";
import {state as initialState} from "../states/map.js";

import Immutable from 'immutable';

let mapRoot = new Map([
  [events.setAccessToken, handleSetAccessToken],
  [events.setGeoJSON, handleSetGeoJSON]
]);

function handleSetAccessToken(state, action) {
  return state.set(map.accessToken, action.data.token);
}

function handleSetGeoJSON(state, action) {
  return state
    .set(map.mapData, Immutable.Map(action.data));
}

const Reducer = (state = initialState, action) => {
  let handleAction = mapRoot.get(action.type);
  if (typeof handleAction === 'function') {
    return handleAction(state, action);
  } else {
    return state;
  }
};

export default Reducer;