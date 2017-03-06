import {events} from "../constants/map.js";

export const setAccessToken = (accessToken) => {
  return {
    type: events.setAccessToken,
    data: {
      token: accessToken
    }
  }
};
