//Leia um número de 2 dígitos e verifique se o algarismo da dezena é igual o da unidade
const prompt = require('prompt-sync')();

let nums = prompt('Adicione um número de dois dígitos. ');
let var2 = nums.split("");

let num1 = +var2[0];
let num2 = +var2[1];

function comparaNumeros (){
     if(num1 == num2){
        console.log(`O número "${nums}" tem os dois dígitos iguais.`)
    } else {
        console.log(`O número "${nums}" não tem os dois dígitos iguais.`)
    }
}

comparaNumeros();