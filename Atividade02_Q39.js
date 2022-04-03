//Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:
//D = (R + S) / 2  | em que R = (A + B) ** 2 e S = (B + C) ** 2

console.clear();
const prompt = require('prompt-sync')();

const num1 = +prompt('Adicione um número inteiro. ');
const num2 = +prompt('Adicione outro número inteiro. ');
const num3 = +prompt('Adicione outro número inteiro. ')

const quadsomaAB = (num1 ** 2) + (2 * num1 * num2) + (num2 ** 2); // fórmula para obter o quadrado da soma de A e B.
const quadsomaBC = (num3 ** 2) + (2 * num2 * num3) + (num3 ** 2); // fórmula para obter o quadrado da soma de B e C.
const D = (quadsomaAB + quadsomaBC) / 2 //resolução da expressão

console.log(`O resultado dessa expressão é: ${D}`)
