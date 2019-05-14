const readlineSync = require('readline-sync');

//Zmienna końcowa
var result = "";

//wartości podawane przez użytkownika

var n = readlineSync.questionInt("Podaj liczbę (> 0): ");

var array = new Array((n + 1));
function char (x,y){
  //funkcja sprawdzająca czy liczby są względnie pierwsze
}

//tworzenie górnego i lewego paska tablicy
for (var y = 0; y <= n; y++) {
  array[y] = [];
  for (var x = 0; x <= n; x++) {
    array[y][0] = y;
    array[0][x] = x;
  }
}

//wypełnianie tablicy + i -
for (var y = 1; y <= n; y++) {
  for (var x = 1; x <= n; x++) {
    char(x,y);
  }
}
console.log(array.join("\n"))
