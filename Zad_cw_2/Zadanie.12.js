
const readlineSync = require('readline-sync');

var cena = readlineSync.question("Ile trzeba wydać? Format: <zł> [SPACJA] <gr>: ");
var zligr = cena.split(" ");
var zl = +zligr[0];
var gr = +zligr[1];

var gr = zl * 100 + gr;

var zl5 = Math.floor(gr/500);
gr -= zl5 * 500;

var zl2 = Math.floor(gr/200);
gr -= zl2 * 200;

var zl1 = Math.floor(gr/100);
gr -= zl1 * 100;

var gr50= Math.floor(gr/50);
gr -= gr50 * 50;

var gr20 = Math.floor(gr/20);
gr -= gr20 * 20;

var gr10= Math.floor(gr/10);
gr -= gr10 * 10;

var gr5= Math.floor(gr/5);
gr -= gr5 * 5;

var gr2= Math.floor(gr/2);
gr -= gr5  * 2;

var gr1 = Math.floor(gr/1);
gr -= gr5 * 1;
let result = "";
if(zl5 > 0) result+= zl5 + " x 5zł\n";
if(zl2 > 0) result+= zl2 + " x 2zł\n";
if(zl1 > 0) result+= zl1 + " x 1zł\n";
if(gr50 > 0) result+= gr50 + " x 50gr\n";
if(gr20 > 0) result+= gr20 + " x 20gr\n";
if(gr10 > 0) result+= gr10 + " x 10gr\n";
if(gr5 > 0) result+= gr5 + " x 5gr\n";
if(gr2 > 0) result+= gr2 + " x 2gr\n";
if(gr1 > 0) result+= gr1 + " x 1gr\n";

console.log(result);
