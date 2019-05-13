const readlineSync = require('readline-sync');

//Zmienna końcowa
var result = "";

//wartości podawane przez użytkownika

var decNum = readlineSync.questionInt("Podaj liczbę całkowitą: ");
while ((decNum > -2 147 483 648) && (decNum < 2 147 483 647)) {
  console.log("Podana liczba jest za duża/mała! (-2147483648 - 2147483647)");
  decNum = readlineSync.questionInt("Podaj liczbę całkowitą: ");
}
