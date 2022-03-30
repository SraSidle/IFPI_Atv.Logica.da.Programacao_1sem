//Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.
console.clear();
const prompt = require ('prompt-sync')();

function reajuste(salario, aumento, valorFinal) { // função com parâmetros
    salario = +prompt('Adicione o valor do seu salário. ')
    aumento = Math.trunc((salario / 100) * 25) // parâmetro para cálculo de 25% de salario
    valorFinal = salario + aumento 

 console.log(`O seu reajuste salarial de R$ ${salario} reais, com acréscimo de 25% resulta em: ${valorFinal}.`)
}

reajuste(); // chamar função