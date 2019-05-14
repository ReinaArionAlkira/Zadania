function stringRotate(a, b){
  b = b*1;
  if ((typeof a != "string") || (typeof b != "number") || (b < 0) || !(Number.isInteger(b)))
    return '';
  else if (b > a.length)
    b = Math.floor(b/a.length);
  var frag = a.toString().substr(0, b);
  var end = a.toString().substr(b, a.length - b);
  var result = "";
  result = end + frag;
  return result;
}
