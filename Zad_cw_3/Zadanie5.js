const readlineSync = require('readline-sync');

//Zmienna końcowa
var result = "";

//wartości podawane przez użytkownika
var decNum = readlineSync.questionInt("Podaj liczbę całkowitą: ");
while ((decNum < -2147483648) || (decNum > 2147483647)) {
  console.log("Podana liczba nie należy do tego przedziału (-2147483648 - 2147483647)");
  var decNum = readlineSync.questionInt("Podaj liczbę całkowitą: ");
}
//zmienna pomocnicza
var num = decNum;
// deklaracja tablicy pomocniczej i znaku liczby
var binArray = [];
var char = decNum < 0 ? 1 : 0;

result += "Liczba " + decNum + " w binarnym kodzie ZM: ";
decNum = decNum * (decNum < 0 ? -1 : 1);

//wprowadzanie cyfr na początek tablicy
while (true) {
  binArray.unshift(decNum % 2);
  decNum = Math.floor(decNum / 2);

  if (decNum < 1) break;
}

for (var i = binArray.length; i < 31; i++ ) {
  binArray.unshift(0);
}
//wprowadzenie znaku liczby na początek tablicy
binArray.unshift(char);

//dodanie kodu ZM do wyniku końcowego
for(var i = 0; i < 32; i++){
  result += binArray[i] + (i === 0 ? "." : "");
}

//negacja
if (char == 1){
  for (var i = 1; i < 32; i++) {
    binArray[i] = binArray[i] == 0 ? 1 : 0;
  }
}
//dodanie kodu u1 do wyniku końcowego
result += "\n Liczba " + num + " w binarnym kodzie U1: ";
for(var i = 0; i < 32; i++){
  result += binArray[i] + (i === 0 ? "." : "");
}
var frag = "";
//dodanie kodu U2 do wyniku końcowego
result += "\n Liczba " + num + " w binarnym kodzie U2: ";
var o = 0;
if (char === 0)
  for (var i=0; i < 32; i++)
    result += binArray[i] + (i === 0 ? "." : "");

//tworzenie zmienionej do kodu U2 liczby
while (true) {
  frag += binArray[o];
  if (binArray[o] == 1){
    frag += binArray[o];
    break;
  }
  o++;
}
//jeśli znak jest ujemny, wypełnij tablicą i dodaj liczbę w kodzie U2
if(char == 1) {
  for (var i=0; i < (binArray.length - frag.length); i++)
    result += binArray[i] + (i === 0 ? "." : "");
  result += frag;
}
console.log(result);
