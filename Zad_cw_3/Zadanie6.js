const readlineSync = require('readline-sync');
// </editor-fold>

//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

// <editor-fold desc="Input">
//Inputy podawane przez użytkownika
var n = readlineSync.questionInt("Podaj liczbę (> 0): ");
// </editor-fold>

// <editor-fold desc="Operacje wykonywane przez program" >
// Algorytm Euklidesa
var euklid = function (n1, n2) {
  // Ustalenie, która liczba jest większa
  let a;
  let b;
  if (n1 >= n2) {
    a = n1;
    b = n2;
  } else {
    b = n1;
    a = n2;
  }

  // Obliczenia
  while (b !== 0) {
    let c = a % b;
    a = b;
    b = c;
  }

  return a;
}
var array = new Array((n + 1));
for (var y = 0; y <= n; y++) {
  array[y] = [];
  for (var x = 0; x <= n; x++) {
    array[y][0] = y;
    array[0][x] = x;
    array[y][x] = (euklid(array[0][x],array[y][0]) === 1);
    array[y][x] = array[y][x] ? "+" : ".";
  }
  //array.join("\n");
}
result += array.join("\n");
/*for (var y = 0; y <= n; y++) {
  array[y] = [];
  for (var x = 0; x <= n; x++) {
    result += array[y][x] + " ";
  }
result += "\n";
}
*/
// Konstrukcja wiadomości końcowej

//Wyświetlanie wyniku działania
console.log(result);
