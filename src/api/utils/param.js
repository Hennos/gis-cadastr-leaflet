function param(plainObject) {
  if (typeof plainObject !== 'object') {
    return "";
  }
  return Object.keys(plainObject).map((key) => {
    return key + '=' + encodeURIComponent(plainObject[key]);
  }).join('&');
}

export default param;