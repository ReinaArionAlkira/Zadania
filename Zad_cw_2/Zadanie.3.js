[,,a] = process.argv;

if (a > 0){
var wynik = 1;
while (wynik < a) {
    console.log(wynik);
    wynik *= 2;
    
}
}
else{
    console.log("Liczba ma być większa od 0")
}
