const readlineSync = require('readline-sync');

var suma=0;
do{
    var a = readlineSync.questionInt();
    suma += a;
}
while (a!=0) {
    console.log("Suma liczb:"+ suma)
}
