//deklaracja zmiennej końcowej
var same = "\n";

var array = new Array(20);
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//tworzenie tablicy z liczb losowych 1-10
for (var i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * (10) + 1);
}

//wypisanie tablicy
console.log("Tablica:", array.join(" | "))

//Obliczanie powtórzeń
for (var i = 0; i < array1.length; i++) {
  var count = 0;
  for (var j = 0; j < 20; j++) {
    array[j] === i ? count++ : 0;
  }
  same += i + " - " + count + "\n";
}

//wypisanie wyniku końcowego
console.log("\nPowtórzenia:\n", same)
