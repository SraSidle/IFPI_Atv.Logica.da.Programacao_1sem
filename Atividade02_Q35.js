//Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.:
//número = 9534 ; soma = 9+5+3+4 = 21.

console.clear();
const prompt = require('prompt-sync')();

const numero = +prompt('Adicione um número de 4 dígitos ');
const milhar = Math.trunc(numero / 1000)// milhar
const centena = Math.trunc((numero % 1000)/ 100) // para conseguir a centena
const dezena = Math.trunc((numero % 100) / 10) // a dezena 
const unidade = Math.trunc(numero % 10) // a unidade

const soma = (milhar + centena + dezena + unidade) 

console.log(`A soma dos números ${milhar} + ${centena} + ${dezena} + ${unidade} = ${Math.trunc(soma)}`)