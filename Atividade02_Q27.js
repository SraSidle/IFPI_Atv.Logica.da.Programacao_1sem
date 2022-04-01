//Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos
//segundos ele corresponde.
console.clear();
const prompt = require ('prompt-sync')();

const segundos = +prompt('Adicione um número de segundos. ');
const horas = Math.trunc(segundos / 3600); // transforma para horas
const minutos = Math.trunc((segundos % 3600)/ 60); // pega o resto, divide por 60, transformando em minutos
const segundoSobra = ( segundos % 60); //pega o resto da divisão por 60, sendo os segundos que sobram

console.log(segundos, 'segundos equivalem a:' , horas , 'hora(s)' , minutos , 'minuto(s)' , segundoSobra , 'segundo(s)')