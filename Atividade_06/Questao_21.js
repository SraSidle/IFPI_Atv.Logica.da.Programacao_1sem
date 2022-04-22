/*Realize arredondameento de números utilizando a regra usual da matemática: se a parte fracionário for maior ou
= 0.5 (arredondar pra cima) senão(arredonar para baixo) */
const prompt = require("prompt-sync")();

let num = prompt("Adicione um número decimal qualquer. ");
const separa = num.split(".");

let inteiro = +separa[0];
let number = +num;

let decimal = number - inteiro

if (decimal >= 0.5) {
    console.log(`Esse número: ${number} será arredondado para cima: ${Math.round(number)}`)
} else {
    console.log(`Esse número: ${number} será arredondado para baixo: ${Math.round(number)}`)
}