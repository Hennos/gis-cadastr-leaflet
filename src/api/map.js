export async function fetchAccessToken() {
  let accessToken = null;
  try {
    await fetch("http://127.0.0.1:1337/token")
      .then(response => response.json())
      .then(data => {
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
      .then(response => response.json())
      .then(data => {
        dataGeoJSON = data;
      })
      .catch(error => {
        throw error;
      });
  } catch (error) {
    throw error;
  }
  return dataGeoJSON;
}

function param(plainObject) {
  return Object.keys(plainObject).map((key) => {
    return key + '=' + encodeURIComponent(plainObject[key]);
  }).join('&');
}

