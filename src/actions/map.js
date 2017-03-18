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

export const requestGeoJSON = (pattern) => {
  return {
    type: events.requestGeoJSON,
    pattern: pattern
  }
};

export const changeGeoJSON = (geoJSON) => {
  return {
    type: events.changeGeoJSON,
    data: geoJSON
  }
};

export const setGeoJSON = (data) => {
  return {
    type: events.setGeoJSON,
    data: data
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
