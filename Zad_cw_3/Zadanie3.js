//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

var array = [];

//Losowanie liczb do tablicy
result = "Wylosowana tablica:\n";
for (var y = 0; y < 5; y++) {
  array[y] = [];
  for (var x = 0; x < 5; x++) {
    var rand = Math.ceil(Math.random() * (10) - 5);

    array[y][x] = rand;
    result += ((rand < 0) ? " " : "  ") + rand;
  }
  result += "\n";
}

result += "Minimalne wartości w wierszach:\n";
for (var y = 0; y < 5; y++) {
  var min = Number.MAX_VALUE;
  for (var x = 0; x < 5; x++) {
    if (array[y][x] < min) min = array[y][x];
  }

  result += y + ":" + ((min < 0) ? " " : "  ") + min + "\n";
}

result += "Maksymalne wartości w kolumnach:\n";
for (var x = 0; x < 5; x++) {
  var max = Number.MIN_VALUE;
  for (var y = 0; y < 5; y++) {
    if (array[y][x] > max) max = array[y][x];
  }

  result += x + ":" + ((max < 0) ? " " : "  ") + max + "\n";
}

//Maksymalna na pierwszej i minimalna na drugiej przekątnej
var max = Number.MIN_VALUE;
var min = Number.MAX_VALUE;
for (var j = 0; j < 5; j++) {
  if (array[j][j] > max) max = array[j][j];
  if (array[4-j][j] < min) min = array[4-j][j];
}
result += "Maksimum na pierwszej przekątnej: " + max + "\n";
result += "Minimum na drugiej przekątnej: " +  min;

//Wyświetlanie wyniku działania
console.log(result);
