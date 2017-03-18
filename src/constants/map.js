export const events = Object.freeze({
  requestAccessToken: "@@map/REQUEST_ACCESS_TOKEN",
  setAccessToken: "@@map/SET_ACCESS_TOKEN",

  requestGeoJSON: "@@map/REQUEST_GEO_JSON",
  changeGeoJSON: "@@map/SEND_GEO_JSON",
  setGeoJSON: "@@map/SET_GEO_JSON",

  signalFailedRequest: "@@map/FAILED_REQUEST"
});

export const map = Object.freeze({
  accessToken: "accessToken",
  mapData: "mapData"
});
