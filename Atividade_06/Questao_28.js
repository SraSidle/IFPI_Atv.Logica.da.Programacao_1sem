/*Leia as coordenadas carteisanas (x, y) de dois pontos no plano, que correspondem a dois cantos de um retângulo.
Baseado nisto, calcule e escreva a área desse retâmgulo.*/
const prompt = require("prompt-sync")();

let coor = prompt("Adicione as coordenadas cartesianas que correspondem aos cantos de um retângulo. ex: x y");
const separa = coor.split(" ");

let pontoX = +separa[0];
let pontoY = +separa[1];

