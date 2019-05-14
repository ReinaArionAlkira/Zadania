function magicSequence(a) {
  var array = [];
  array[1] = -1;
  array[2] = -2;
  array[3] = -2;
  if(a == 1) return array[1];
  if(a == 2) return array[2];
  if(a == 3) return array[3];
  array[a] = magicSequence(a - 1) * (a - 3);
  return array[a];
}
