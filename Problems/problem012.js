function objectsDiff(a, b) {
  let repetDiff = [];
  for (let key in a) {
    if(Object.keys(b).indexOf(key) === -1) repetDiff.push(key);
  }
  for (let key in b) {
    if(Object.keys(a).indexOf(key) === -1 && repetDiff.indexOf(key) === -1) {
      repetDiff.push(key);
    }
  }

  return repetDiff;
}
