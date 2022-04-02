// Leia 3 números, calcule e escreva a média dos números.

console.clear();
const prompt = require('prompt-sync')();

const numero = +prompt('Adicione um número de 3 dígitos ');
const centena = Math.trunc(numero / 100) // para conseguir a centena
const dezena = Math.trunc((numero % 100) / 10) // a dezena 
const unidade = Math.trunc(numero % 10) // a unidade

const media = (centena + dezena + unidade) / 3

console.log(`A média dos dígitos desses números é: ${Math.trunc(media)}`)