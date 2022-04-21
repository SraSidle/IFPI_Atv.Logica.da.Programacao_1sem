//Leia 3 números e escreva-os em ordem crescente.

const prompt = require('prompt-sync')();

let nums = prompt('Adicione três números inteiros. ');
let var2 = nums.split(" ");

let num1 = +var2[0];
let num2 = +var2[1];
let num3 = +var2[2];

console.log(num1 , num2 , num3)

function maior () {

             if (num1 == num2 && num1 == num3 && num2 == num3){
        console.log(`Os três números são iguais.`)
    }   else if ((num1 > num2) && (num2 > num3)) {
        console.log(`A ordem crescente dos números é: ${num3} , ${num2} , ${num1}`)
    }   else if (num1 > num3 &&  num3 > num2) {
        console.log(`A ordem crescente dos números é: ${num2} , ${num3} , ${num1}`)
    }   else if (num2 > num1 && num1 > num3){
        console.log(`A ordem crescente dos números é: ${num3} , ${num1} , ${num2}`)
    }   else if (num2 > num1 && num3 > num1) {
        console.log(`A ordem crescente dos números é: ${num1} , ${num3} , ${num2}`)
    }   else if ((num3 > num1) && (num1 > num2)){
        console.log(`A ordem crescente dos números é: ${num2} , ${num1} , ${num3}`)
    }   else if ((num3 > num2) && (num2 > num1)){
         console.log(`A ordem crescente dos números é: ${num3} , ${num2} , ${num1}`)   
        }
}

maior();