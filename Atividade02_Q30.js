//Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde.
console.clear();
const prompt = require('prompt-sync')();
const colors = require('colors');

const minutos = +prompt('Adicione um número em minutos. '.magenta);
const dias = Math.trunc(minutos / 1440) //divisão dos minutos totais de um dia pelo valor adicionado, retornando a quan tidade de dias
const horas = Math.trunc((minutos % 1440) / 60) //resto dos minutos que sobram de um dia, para indicar quantas horas equivalem
const minutosrestantes = Math.trunc(minutos %  60);

console.log(`${minutos} minutos equivalem a ${dias} dia(s), ${horas} hora(s) e ${minutosrestantes} minuto(s)`.blue);

