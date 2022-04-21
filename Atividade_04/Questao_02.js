//Leia dois números, verifique e escreva o menor e o maior dos números lidos
const prompt = require('prompt-sync')();

let nums = prompt('Adicione dois números inteiros. ');
let var2 = nums.split(" ");
let num1 = +var2[0]
let num2 = +var2[1]

function numMaiorMenor (){
    if(num1 > num2) {
        console.log(`O número ${num1} é maior que o ${num2}.`)
    } else {
        console.log(`O número ${num2} é maior que o ${num1}.`)
    }
}

numMaiorMenor();