/*Leia a altura em metros e o peso em kg de uma pessoa. Em seguida, calcule o IMC (peso / altura ** 2) Ao final,escreva se a pessoa está com o peso normal
se abaixo de 25, obesidade (25 a 30) e obesidade mórbida +30*/
const prompt = require("prompt-sync")();

let altura = +prompt("Informe o valor da sua altura em metros. ");
let peso = +prompt("Informe o valor do seu peso em kgs. ");

let IMC = Math.trunc(peso / (altura ** 2));


       if(IMC < 17) {
    console.log(`Seu IMC é: ${IMC}. Você está muito abaixo do peso.`)
} else if (IMC < 18.49) {
    console.log(`Seu IMC é: ${IMC}. Você está abaixo do peso.`)
} else if(IMC < 26) {
    console.log(`Seu IMC é: ${IMC}. Você está com peso Normal.`)
} else if(IMC < 30) {
    console.log(`Seu IMC é: ${IMC}. Você está acima do peso..`)
} else if(IMC < 35) {
    console.log(`Seu IMC é: ${IMC}. Você está com obesidade I.`)
} else if (IMC < 40) {
    console.log(`Seu IMC é: ${IMC}. Você está com obesidade II (Severa).`)
} else if (IMC > 40) {
    console.log(`Seu IMC é: ${IMC}. Você está com obesidade III(Mórbida).`)
}
