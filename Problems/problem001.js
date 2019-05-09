
function triangleArea (a, b, c) {
  if (a + b > c && a + c > b && c + b > a){
    var p = (a + b + c)/2;
    var homer = p*(p-a)*(p-b)*(p-c);
    var pole =  Math.sqrt(homer);
    pole = Math.round(pole * 100) / 100;
    if (Number.isNaN(pole)) console.log("-1")
    else console.log(pole)
  }
  else console.log("-1")
}
triangleArea (a, b, c);
