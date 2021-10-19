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

/////////////////////////////////////////////////////////////////////////////////////////
// NOTA: IL CODICE SEGUENTE E' SENZA function() PERCHE' VOLEVO PROCEDERE PER GRADI, 
//       ORA CHE IL CODICE FUNZIONA PROCEDERO' A ICORPORARE LE function().
/////////////////////////////////////////////////////////////////////////////////////////

//  UTENTE
// chiedo all'utente pari/dispari e il numero da 1 a 5

const pariDispariUtente = prompt("Inserisci Pari o Dispari.");
pariDispariUtente.toLowerCase();
const numeroUtente = prompt("inserisci un numero da 1 a 5");
console.log("l'utente ha scelto: " + pariDispariUtente);
console.log("l'utente ha scelto: " + numeroUtente);



//COMPUTER
let randomNumber = numeroGenerato();

console.log("Il computer ha scelto: " + randomNumber);



//SOMMA

let somma = parseInt(numeroUtente) + parseInt(randomNumber);
console.log("La somma dei due numeri è: " + somma);

if ((numeroUtente < 1) || numeroUtente > 5) {
    alert("per favore inserisci un numero");
} else {
    controlloPari(somma);
}









//////////////////////////////////////////////////////////////////
// FUNZIONI

//per generare numeri //computer
function numeroGenerato() {
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}


//per controllare se il risultato è pari
function controlloPari(num) {
    if ((pariDispariUtente === "pari") && (somma % 2 === 0)) {
        console.log("l'utente ha vinto");

    } else if ((pariDispariUtente === "dispari") && (somma % 3 === 0)) {
        console.log("l'utente ha vinto");

    } else {
        console.log("l'utente ha perso");

    }
}