//Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.
console.clear();
const prompt = require('prompt-sync')();
const colors = require('colors');

const meses = +prompt('Adicione um número de meses. ');
const anos = Math.trunc(meses / 12);
const mesesrestantes = Math.trunc(meses % 12);

console.log(`${meses} meses equivalem a: ${anos} ano(s) e ${mesesrestantes} mes(es).`.magenta)