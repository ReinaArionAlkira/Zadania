function findMax(a, b) {
  var max = -Infinity;
  for (var i = 0; i < arguments.length; i++)
    max = arguments[i] > max ? arguments[i] : max;
  return max;
}
