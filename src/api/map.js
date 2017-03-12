export async function fetchAccessToken() {
  let accessToken = null;
  try {
    await fetch("http://127.0.0.1:1337/echo?token")
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