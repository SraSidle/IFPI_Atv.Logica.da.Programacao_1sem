//Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.
console.clear();
const prompt = require('prompt-sync')();

const metros = +prompt('Adicione um valor em metros. ');
const km = (metros / 1000); //conversor

console.log(metros , 'metro(s) equivalem a:' , km , 'quilometro(s).' )