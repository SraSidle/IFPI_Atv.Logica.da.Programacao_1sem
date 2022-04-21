//Leia três números e escreva o maior e menor valor dos números lidos.
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
    }   else if (num1 > num2 && num1 > num3){
        console.log(`O número ${num1} é o maior. `)
    }   else if (num1 < num2 &&  num2 > num3) {
        console.log(`O número ${num2} é o maior. `)
    }   else if (num3 > num1 && num3 > num2){
        console.log(`O numero ${num3} é o maior. `)
    }   
}

function menor () {
           if (num1 == num2 && num1 == num3 && num2 == num3) {
    } else if (num1 < num2 && num1 < num3) {
        console.log(`O número ${num1} é o menor. `)
    } else if (num2 < num1 && num2 < num3) {
        console.log(`O número ${num2} é o menor. `)
    } else if (num3 < num1 && num3 < num2) {
        console.log(`O número ${num3} é o menor. `)
    }
}

maior();
menor();