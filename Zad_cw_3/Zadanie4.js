const readlineSync = require('readline-sync');

//Zmienna końcowa
var result = "";

//wartości podawane przez użytkownika

var decNum = readlineSync.questionInt("Podaj liczbę całkowitą: ");
while ((decNum < -2147483648) || (decNum > 2147483647)) {
  console.log("Podana liczba nie należy do tego przedziału (-2147483648 - 2147483647)");
var decNum = readlineSync.questionInt("Podaj liczbę całkowitą: ");
}

// deklaracja tablicy pomocniczej i znaku liczby
var binArray = [];
var char = decNum < 0 ? 1 : 0;

result += "Liczba " + decNum + " binarnie: ";
decNum = decNum * (decNum < 0 ? -1 : 1);

while(true){
  binArray.unshift(decNum % 2);
  decNum = Math.floor(decNum / 2);

  if(decNum < 1){
    binArray.unshift(char);
    break;
  }
}

for(var i = 0; i < binArray.length; i++){
  result += binArray[i] + (i === 0 ? "." : "")
}

console.log(result);
