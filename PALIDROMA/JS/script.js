"use strict"

// CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA

const word= prompt('Inserisci una parola');

// UTILIZZARE IL METODO SPLIT
let word_space= word.split('');
console.log(word_space);

//UTILIZZARE METODO REVERSE
let word_reverse= word_space.reverse();
console.log(word_reverse)

//UTILIZZARE METODO JOIN
let word_join= word_reverse.join('') 
console.log(word_join);

function palindrom (word){
    console.log(word);
    if(word_join === word){
        console.log("E' PALINDROMA");
    }
    else{
        console.log("NON E' PALINDROMA");
    }
}

palindrom(word);