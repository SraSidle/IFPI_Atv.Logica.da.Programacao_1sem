//O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
//distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
//seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao consumidor.

console.clear();
const prompt = require('prompt-sync')();

let custoFab = +prompt('Qual o custo de fábrica do carro? ');
let partedist = (custoFab / 100 * 28); //obtem a porcentagem da distribuidora
let impostos = (custoFab / 100 * 45) //obtem a porcentagem de impostos
let custoCons = custoFab + partedist + impostos //soma e recebe o valor final

console.log(`O custo ao consumidor desse veículo é: R$ ${custoCons} reais.`)