function strangeSum(a, b) {
  var sum = a+b;
  if(a == b) return (sum * 3);
  if(a != Math.round(a)|| b != Math.round(b) || isNaN(a) || isNaN(b)) return(null);
  else return (sum);
}
