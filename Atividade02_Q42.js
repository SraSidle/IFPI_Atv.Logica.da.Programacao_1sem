//Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e ponto2 (x2,y2),
//escreva a distância entre eles, conforme fórmula abaixo.
console.clear();
const prompt = require('prompt-sync')();

const x1 = +prompt('Adicione o valor do ponto x1 no plano. '); //pede o ponto x
const y1 = +prompt('Adicione o valor do ponto y1 no plano. '); // pede o ponto y

const x2 = +prompt('Adicione o valor do ponto x2 no plano. ');
const y2 = +prompt('Adicione o valor do ponto y2 no plano. ');

const distancia = Math.trunc(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 ));//fórmula para obter a distância de dois pontos  
//Math.sqrt tira a raiz quadrada de um número
console.log(`A distância dos pontos(${x1} , ${y1}) e (${x2} , ${y2}) é igual a: ${distancia})`)