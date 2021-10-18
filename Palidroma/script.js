/**
 * PALInDROMA
 * Chiedere all'utente di inserire una parola
 * per poi controllare se la parola inserita è palindroma
 */


//prompt per l'utente
let parolaUtente = prompt("inserisci una parola");


const usingArrayFrom = Array.from(parolaUtente);
console.log(usingArrayFrom);

/* for (let i = parolaUtente.length - 1; i >= 0; i--) {


    let letter = [i];
    console.log(i);




} */







const reverseArray = usingArrayFrom.reverse();
console.log(reverseArray);
/* 
for (let i = 0; i < reverseArray.length; i++) {


    let letterReverse = reverseArray[i];
    console.log(letterReverse);



} */



if (letter === letterReverse) {
    console.log("la parola che hai inserito è palindroma");
} else {
    console.log("mi dispiace, la parola inserita non è palindroma");
}




