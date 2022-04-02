//Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
//(Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).
console.clear();
const prompt = require('prompt-sync')();

const numero = +prompt('Adicione um número de 3 dígitos');
const centena = Math.round(numero / 100)
const dezena = Math.trunc((numero % 100) / 10)
const unidade = Math.trunc(numero % 10)

console.log( numero)
console.log(centena)
console.log(dezena)
console.log(unidade)
const inversao = (`${unidade} ${dezena} ${centena} }`) 
console.log(inversao)