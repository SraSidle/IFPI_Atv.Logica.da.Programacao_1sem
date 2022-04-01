//Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele corresponde.
console.clear();
const prompt = require('prompt-sync')();

const horas = +prompt('Adicione um valor em horas. ');
const semanas = Math.trunc( horas / 168); // horas divididas pelo total de horas semanais = 1 semana
const dias = Math.trunc( (horas % 168) / 24); // resto das horas semanais dividido por 24 = o número de dias
const horasrestantes = (horas % 24);// resto de 24 horas, é o restante das horas

console.log(`${horas} horas, são iguais a: ${semanas} semana(s), ${dias} dia(s) e ${horasrestantes} hora(s).`);
