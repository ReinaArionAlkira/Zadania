var array = new Array(10);
var max = 0;
var min = 0;
var sum = 0;
var less = 0;
var more = 0;


for (var i=0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * (21) - 10);
    if (max <= array[i]) max = array[i];
    if (min >= array[i]) min = array[i];
    sum += array[i];
    var average = sum / array.length;
    console.log(average)
    if (average < array[i]) more++;
    if (average == array[i]) more--;
    if (average > array[i]) less++;
}
console.log("Tablica:", array.join(" | "))
console.log("Najwieksza liczba z tablicy to:", max);
console.log("Najmniejsza liczba z tablicy to:", min);
console.log("Średnia liczb to:", average);
console.log("Liczba mniejszych od średniej liczb to:", less);
console.log("Liczba większych od średniej liczb to:", more);
console.log("Tablica w odwrotnej kolejności:", array.reverse().join(" | "));
