//Leia 5 números inteiros, calcule sua média e diga qual dos números é maior que a média.
const prompt = require("prompt-sync")();

let inteiros = prompt("Adicione 5 números inteiros. ");
const num = inteiros.split(" ");

let num1 = +num[0];
let num2 = +num[1];
let num3 = +num[2];
let num4 = +num[3];
let num5 = +num[4];

let media = (num1 + num2 + num3 + num4 +num5) / 5 ;

       if(num1 > media){
    console.log(`${num1} é maior que a média: ${media}.`)
} else if (num2 > media) {
    console.log(`${num2} é maior que a média: ${media}.`)
} else if (num3 > media) {
    console.log(`${num3} é maior que a média: ${media}.`)
} else if (num4 > media) {
    console.log(`${num4} é maior que a média: ${media}.`)
} else if (num5 > media) {
    console.log(`${num5} é maior que a média: ${media}.`)
}