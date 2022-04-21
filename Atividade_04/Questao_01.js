//Leia 3 números e escreva quantos números iguais tem entre os números
const prompt = require('prompt-sync')();

let nums = prompt('Adicione dois números inteiros. ');
let var2 = nums.split(" ");

let num1 = +var2[0];
let num2 = +var2[1];
let num3 = +var2[2];

let contagem = 0;

function comparaNumeros(){

      if(num1 == num2) {
        (contagem += 1)
    } if(num1 == num3){
        (contagem += 1)
    } if(num2 == num3){
        (contagem += 1)
    }
    
    console.log(`${num1} , ${num2} , ${num3} têm ${contagem} números iguais entre si.`)
}

comparaNumeros();

