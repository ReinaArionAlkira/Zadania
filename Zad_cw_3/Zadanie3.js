//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

var array = [];

//Losowanie liczb do tablicy
result = "Wylosowana tablica:\n";
for (let y = 0; y < 5; y++) {
  array[y] = [];
  for (let x = 0; x < 5; x++) {
    let rand = Math.ceil(Math.random() * (10) - 5);

    array[y][x] = rand;
    result += ((rand < 0) ? " " : "  ") + rand;
  }
  result += "\n";
}

result += "Minimalne wartości w wierszach:\n";
for (let y = 0; y < 5; y++) {
  let min = Number.MAX_VALUE;
  for (let x = 0; x < 5; x++) {
    if (array[y][x] < min) min = array[x][y];
  }

  result += y + ":" + ((min < 0) ? " " : "  ") + min + "\n";
}

result += "Maksymalne wartości w kolumnach:\n";
for (let x = 0; x < 5; x++) {
  let max = Number.MIN_VALUE;
  for (let y = 0; y < 5; y++) {
    if (array[y][x] > max) max = array[x][y];
  }

  result += x + ":" + ((max < 0) ? " " : "  ") + max + "\n";
}

//Maksymalna na 1 przekątnej, minimalna na 2 przekątnej
var max = Number.MIN_VALUE;
var min = Number.MAX_VALUE;
for (let i = 0; i < 5; i++) {
  if (array[i][i] > max) max = array[i][i];
  if (array[4-i][i] < min) min = array[4-i][i];
}
result += "Maksimum na 1. przekątnej: " + max + "\n";
result += "Minimum na 2. przekątnej: " +  min;

//Wyświetlanie wyniku działania
console.log(result);
