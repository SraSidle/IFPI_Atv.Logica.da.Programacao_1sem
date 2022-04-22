/*Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1-Adição
    2-Subtração 3-multiplicação 4-divisão). Calcule escreva o resultado dessa operação sobre os dois valores lidos. */
const prompt = require("prompt-sync")();

console.log(`Você terá que adicionar dois números inteiros. \n 
e terá que adicionar um número de 1 a 4 para represnetar sua escolha:
1 - Adição
2 - Subtração
3 - Multiplicação
4 - Divisão`);

prompt();
console.clear();

let num1 = +prompt("Adicione um número inteiro. ");
let num2 = +prompt("Adicone outro número inteiro. ");

const operacao = +prompt("Adicione o número que representa a operação que vc quer");

while ((operacao !== 1) || (operacao !== 2) || (operacao !== 3) || (operacao !== 4)){
     console.log("Adicione um número de 1 a 4.");
     break
}

        if(operacao == 1){
    console.log(`Sua escolha foi adição. 
    ${num1} + ${num2} = ${num1 + num2}`)

} else if (operacao == 2) {
    console.log(`Sua escolha foi Subtração. 
    ${num1} - ${num2} = ${num1 - num2}`)

} else if (operacao == 3) {
    console.log(`Sua escolha foi Multiplicação. 
    ${num1} * ${num2} = ${num1 * num2}`)

} else if (operacao == 4) {
    console.log(`Sua escolha foi Divisão. 
    ${num1} / ${num2} = ${num1 / num2}`)

}