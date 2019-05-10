[,,a,b] = process.argv;
function stringRotate(a, b){
  b = b*1;
  if ((typeof a != "string") || (typeof b != "number"))
    console.log("");
  else if ((b < 0) || !(Number.isInteger(b)))
    console.log("");
  else if (b > a.length)
    b = Math.floor(b/a.length);
  var frag = a.toString().substr(0, b);
  console.log("Frag:" + frag);
  var end = a.toString().substr(b, a.length - b);
  var result = "";
  result = end + frag;
  console.log(result);
}
stringRotate(a, b);
