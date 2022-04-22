/*Leia 1 número inteiro e escreva se este número é par ou ímpar.  */

const prompt = require("prompt-sync")();

let num = +prompt("Adicione um número. ");
let resto = num % 2

   if(resto == 0) {
    console.log(`${num} é par.`)
} else {
    console.log(`${num} é ímpar.`)
}