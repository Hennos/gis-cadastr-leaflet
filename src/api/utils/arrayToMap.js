function arrayToMap(array, key, functor) {
  if (!Array.isArray(array)) {
    return null;
  }
  if (!Object.is(typeof key, 'string')) {
    return null;
  }
  return array.reduce(
    (prev, cur) => {
      if (cur.hasOwnProperty(key)) {
        prev[cur[key]] =
          Object.is(typeof functor, 'function') ? functor(cur) : cur;
      }
      return prev;
    }, {});
}

export default arrayToMap;