//Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.
console.clear();
const prompt = require ('prompt-sync')();

let dias = +prompt('Adicione um número de dias. ');
let semanas = Math.trunc(dias / 7); //divide od diad por 7, chegando no valor semana
let restodias = (dias % 7); //pega o que sobra da divisão por 7, obtendo o valor em dias

console.log(`${dias} dias equilavem a: ${semanas} semana(s) e ${restodias} dia(s) `);