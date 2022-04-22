/*Leia valores inteiros em duas variáveis distintas e se o resto da divisao da primeira pela segunda: 
Se for 1 escreva a soma dessa variaveis distintas + o resto da divisão;
Se for 2, escreva se o primeiro e o segundo valor são pares ou ímpares; 
Se for igual a 3 multiplique a soma dos valores lidos pelo segundo, se este for diferente de 0; 
Se for igual a 4, divida a soma dos números lidos pelo segundo
, se este for diferente de zero, em qualquere outra situação escreva o quadrado dos números lidos. */
const prompt = require("prompt-sync")();

let num1 = +prompt("Adicione o valor numérico 1. ");
let num2 = +prompt("Adicione o valor numérico 2. ");

let resto = num1 % num2;

if (resto == 1) {
    console.log(`A operação que será feita é: ${num1} + ${num2} + ${resto} `);

} else if (resto == 2) {
       if ((num1 % 2) == 0) {
        console.log(`O número ${num1} é par.`)
    } if ((num2 % 2) == 0) {
        console.log(`O número ${num2} é par.`)
    } else if ((num1 % 2) !== 0) {
        console.log(`O número ${num1} é ímpar.`)
    }  else if ((num2 % 2) !== 0) {
        console.log(`O número ${num2} é ímpar.`)
    }

} else if(( resto == 3) && (num2 !== 0)) {
    console.log(`(${num1} + ${num2}) * ${num2} = ${(num1 + num2) * num2}`)

} else if((resto == 4)){
    console.log(`(${num1} + ${num2}) / ${num2} = ${(num1 + num2) / num2}`)

} else {
    console.log(`${num1} ** ${num2} = ${num1 ** num2}`)
}