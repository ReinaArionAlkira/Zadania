const readlineSync = require('readline-sync');

//Zmienna końcowa
var result = "";

//wartości podawane przez użytkownika

var decNum = readlineSync.questionInt("Podaj liczbę całkowitą: ");
while ((decNum < -2147483648) || (decNum > 2147483647)) {
  console.log("Podana liczba nie należy do tego przedziału (-2147483648 - 2147483647)");
  decNum = readlineSync.questionInt("Podaj liczbę całkowitą: ");
}
