function deepCopy(a){
  let b = JSON.parse(JSON.stringify(a));
  return b;
}
