import param from './utils/param.js';
import arrayToMap from './utils/arrayToMap.js';

export async function fetchAccessToken() {
  let accessToken = null;
  try {
    await fetch("http://127.0.0.1:1337/token")
      .then((response) => response.json())
      .then((data) => {
        accessToken = data.accessToken;
      })
      .catch(error => {
        throw error;
      });
  } catch (error) {
    throw error;
  }
  return accessToken;
}

export async function fetchGeoJSON(pattern) {
  let dataGeoJSON = null;
  try {
    await fetch(`http://127.0.0.1:1337/geoJSON?${param(pattern)}`)
      .then((response) => response.json())
      .then((data) => {
        dataGeoJSON = arrayToMap(data, 'id');
      })
      .catch(error => {
        throw error;
      });
  } catch (error) {
    throw error;
  }
  return dataGeoJSON;
}


