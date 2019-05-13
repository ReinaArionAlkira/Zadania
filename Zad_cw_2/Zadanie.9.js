const readlineSync = require('readline-sync');

var liczba = readlineSync.questionInt();
if (liczba == 1) console.log("nie")
if (liczba == 2) console.log("tak")
for (var i=2; i<liczba; i++) {

  if (liczba % i == 0) {
    console.log("nie")
    break;
  }
  if (liczba % i != 0 ) {
    console.log("tak")
    break;
  }
}
