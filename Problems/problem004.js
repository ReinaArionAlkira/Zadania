function getTotalNumberOfNewYaersEveSundays(a, b) {
  var number = 0;
  for(var i = a; i <= b; i++){
    var y = (i-1) % 100;
    var c = (i-1) - y;
    var g = y + Math.floor(y/4);
    if(((((Math.floor(c / 100) % 4) * 5) + g) % 7) == 6)
      number++;
  }

return number;
}
