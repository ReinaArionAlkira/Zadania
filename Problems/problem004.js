function getTotalNumberOfNewYaersEveSundays(a, b) {
  var number = 0;
  for(var i = a; i <= b; i++){
    var a = (i-1) % 100;
    var b = (i-1) - a;
    var c = a + Math.floor(a/4);
    if(((((Math.floor(b / 100) % 4) * 5) + c) % 7) == 6)
      number++;
  }

return number;
}
