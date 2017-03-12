import {events} from "../constants/map.js";

export const requestAccessToken = () => {
  return {
    type: events.requestAccessToken
  }
};

export const setAccessToken = (accessToken) => {
  return {
    type: events.setAccessToken,
    data: {
      token: accessToken
    }
  }
};

export const signalFailedRequest = (error) => {
  return {
    type: events.signalFailedRequest,
    data: {
      error: error
    }
  }
};
