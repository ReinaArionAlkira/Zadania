const readlineSync = require('readline-sync');

var liczba = readlineSync.questionInt();
var np = 0; //nieparzyste
var iloscNP = 0; // ilosc nieparzystych
var p = 0; // parzyste
var iloscP = 0; // ilosc parzystych

while (true) {
  var a= liczba % 10;
  if (a%2==0) {
    p += a;
    iloscP++;
    console.log(iloscP)
  }
  else {
    np += a;
    iloscNP++;
    console.log("np" + iloscNP)
  }
  liczba = Math.floor(liczba/10);
  if(liczba < 1) break;

}
var suma = np + p;
var srNP = np / iloscNP; // srednia liczb nieparzystych
var srP = p / iloscP; // srednia liczb parzystych

  console.log("średnia cyfr nieparzystych:" + srNP)
  console.log("średnia cyfr parzystych:" + srP)
  console.log("suma cyfr:" + suma)
