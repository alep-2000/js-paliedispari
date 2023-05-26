"use strict"

// CHIEDERE ALL'UTENTE DI INSERIRE PARI O DISPARI
let pariOdispari= prompt('Inserisci Pari o Dispari');
console.log(pariOdispari);

// CHIEDERE ALL'UTENTE DI INSERIRE UN NUMERO DA 1 A 5
let num_utente= parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(num_utente);

// CREARE FUNZIONE PER GENERARE NUMERO RANDOM PC

let pc='';

function random(min, max) {
    pc =Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    console.log(pc);
}

random(1, 5);

// CREARE VARIABILE SOMMA
let somma= num_utente + pc;

// CREARE FUNZIONE PER VERFICARE CHI HA VINTO
function win(somma){
    console.log(somma);
    if(somma % 2 === 0){
        console.log("HAI VINTO, E'PARI")
    }else{
        console.log("HAI VINTO, E' DISPARI")
    }
}

win(somma);