function deepFindAndCount (a, b) {
  var repetsum = 0;

  for (var i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      repetsum += deepFindAndCount(a[i], b);
    } else {
      repetsum += a[i] === b ? 1 : 0;
    }
  }
  return repetsum;
}
