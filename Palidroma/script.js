/**
 * PALInDROMA
 * Chiedere all'utente di inserire una parola
 * per poi controllare se la parola inserita è palindroma
 */


//prompt per l'utente
let parolaUtenteDaInvertire = prompt("inserisci una parola");
console.log(parolaUtenteDaInvertire);


//divido la parola nelle singole lettere
let splitParolaUtente = parolaUtenteDaInvertire.split("");
console.log(splitParolaUtente);

//inverto l'ordine delle lettere
let reverseParolaUtente = splitParolaUtente.reverse();
console.log(reverseParolaUtente);

//riunisco in un unica parola le lettere invertite
let parolaUtenteInvertita = reverseParolaUtente.join("");
console.log(parolaUtenteInvertita);

//confronto le parole per vedere se sono palindrome
if (parolaUtenteDaInvertire === parolaUtenteInvertita) {
    console.log("la parola che hai inserito è palindroma");
} else {
    console.log("mi dispiace, la parola inserita non è palindroma");
}









