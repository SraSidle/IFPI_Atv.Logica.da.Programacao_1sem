//Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a
//quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada
//pelo usuário.
console.clear();
const prompt = require ('prompt-sync')();

const quantLatao = +prompt('Adicione a quantidade de Latão em Kg que você quer obter. ');

const cobre = Math.trunc(quantLatao / 100 * 70); //quantidade de cobre
const zinco = Math.trunc(quantLatao  / 100 * 30); //quantidade de zinco

console.log(`Para obter ${quantLatao}, você precisa de ${cobre}Kg de cobre e ${zinco}Kg de zinco. `)