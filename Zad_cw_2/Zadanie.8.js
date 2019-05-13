const readlineSync = require('readline-sync');

var liczba = readlineSync.questionInt();

for (var i=1; i<liczba; i++){
  if(liczba%i==0) console.log(i)
}
