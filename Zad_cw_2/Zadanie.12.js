
const readlineSync = require('readline-sync');

var cena = readlineSync.question("Ile trzeba wydać? Format: <zł> [SPACJA] <gr>: ");
var zligr = cena.split(" ");
var zl = +zligr[0];
var gr = +zligr[1];

var cenaGr = zl * 100 + gr;
