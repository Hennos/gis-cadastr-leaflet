import {events, map} from "../constants/map.js";
import {state as initialState} from "../states/map.js";

let mapRoot = new Map([
  [events.setAccessToken, handleSetAccessToken]
]);

function handleSetAccessToken(state, action) {
  return state.set(map.accessToken, action.data.token);
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