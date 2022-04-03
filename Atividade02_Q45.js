//Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para decidir o numero de notas
//de cada valor que deve ser disponibilizado para o cliente que realizou o saque. Um possível critério seria o da 
//"distribuição ótima" no sentido de que as notas de menor valor disponíveis fossem distribuídas em número mínimo possível.
// Por exemplo, se a maquina só dispõe de notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87,
//o algoritmo deveria indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um algoritmo que
// receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o critério da distribuição ótima.
console.clear()
const prompt = require('prompt-sync')();

const money = +prompt('Adicione um valor em dinheiro. ');

const cinquenta = Math.trunc(money / 50); //obter o dinheiro em notas de 50
const dez = Math.trunc((money % 50) / 10);//dinheiro em notas de 10
const cinco = Math.trunc((money % 10) / 5);//dinheiro em notas de 5
const um = Math.trunc((money % 5) / 1);//dinheiro em notas de 1

console.log(`Você receberá R$ ${money} reais em ${cinquenta} notas de R$50, ${dez} notas de R$10 , ${cinco} notas de R$5 , ${um} notas de R$1.`)