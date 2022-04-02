//Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
//(Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).
console.clear();
const prompt = require('prompt-sync')();

const numero = +prompt('Adicione um número de 3 dígitos. ');
const centena = Math.trunc(numero / 100).toString(); //transforma o número em string pra poder concatenar
const dezena = Math.trunc((numero % 100) / 10).toString();//na ordem desejada, transformando em números, para poder fazer o cálculo
const unidade = Math.trunc(numero % 10).toString();

const inversao = +(unidade + dezena + centena); //o + na frente transforma em número
const soma = numero + inversao;

console.log(`A soma de ${numero} + seu inverso: ${inversao} é igual a ${soma}`);