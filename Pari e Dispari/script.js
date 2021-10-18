/**
 * UTENTE
 * l'utente deve inserire pari o dispari in un prompt
 * a seguire verrà chiesto di inserire un numero da 1 a 5 in un prompt
 *
 * COMPUTER
 * generare un numero random da 1 a 5 utilizzando una funzione
 *
 * sommare i due numeri
 * attraverso una funzione stabiliamo se la somma dei due numeri risulta pari o dispari
 * dichiarare il vincitore
 */





//  UTENTE
// chiedo all'utente pari/dispari e il numero da 1 a 5

const pariDispariUtente = prompt("Inserisci Pari o Dispari.");
const numeroUtente = prompt("inserisci un numero da 1 a 5");
console.log("l'utente ha scelto: " + pariDispariUtente);
console.log("l'utente ha scelto: " + numeroUtente);




//  COMPUTER

function numeroRandom(min, max) {
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;

}
console.log("il computer ha scelto: " + numeroRandom(1, 5));






// LA SOMMA DEI NUMERI

function sommaNumeri(num1, num2) {
    const somma = parseInt(numeroUtente) + numeroRandom(1, 5);
    console.log(numeroRandom(1, 5));
    return somma;
}
console.log("la somma dei numeri scelti è: " + sommaNumeri(parseInt(numeroUtente) + numeroRandom(1, 5)));





