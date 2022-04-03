//Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.
console.clear();
const prompt = require('prompt-sync')();
const colors = require('colors');

const binario = prompt('Adicione um valor me binários. ');

//fórmula para converter o num de entrada
//Math.pow retorna a base elevada ao expoente
 
const convertDec = binario[0] * Math.pow(2,3) + binario[1] * Math.pow (2,2) + binario[2] * Math.pow(2,1) + binario[3] * Math.pow(2,0); 
//créditos ao Iago, que me ajudou com essa fórmula.
console.log(`A conversão de ${binario} em valor binário, para decimal é igual a: ${convertDec}.`.magenta);

