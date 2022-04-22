/*Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas formadas pelos seus 2
últimos dígitos. ex raiz de 9801 == 99 = 98 + 01. O número 9081 é um quadrado perfeito.
Escreva um algoritmo que leia um número de 4 dígitos e retorne se ele é um quadrado perfeito. */
const prompt = require("prompt-sync")();

let num = prompt("Adicione um número de 4 dígitos. ");
let number = +num
const digito = num.split("");

let dig1 = digito[0];
let dig2 = digito[1];
let dig3 = digito[2];
let dig4 = digito[3];

let dezena1 = +(dig1 + dig2);
let dezena2 = +(dig3 + dig4);

let raizTeste = dezena1 + dezena2 ;
let raizReal = Math.sqrt(number);

if (raizTeste == raizReal) {
    console.log(`${num} é um quadrado perfeito, pois ${dezena1} + ${dezena2} é igual à raiz quadrada: " ${raizReal} " desse número. `)
} else {
    console.log(`${num} não é um quadrado perfeito, pois ${dezena1} + ${dezena2} é difente à raiz quadrada: " ${raizReal} " desse número. `)
}
