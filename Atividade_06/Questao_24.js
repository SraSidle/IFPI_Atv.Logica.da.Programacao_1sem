/*Leia os coeficientes (A, B e C) de uma equação de segundo grau e escreva suas raízes. O coeficiente A deve ser diferente de zero. */
const prompt = require("prompt-sync")();

let coeficienteA = +prompt("Adicione o valor do coeficiente 'A' da equação. ");
let coeficienteB = +prompt("Adicione o valor do coeficiente 'B' da equação. ");
let coeficienteC = +prompt("Adicione o valor do coeficiente 'C' da equação. ");

let delta = (coeficienteB ** 2) - (4 * coeficienteA * coeficienteC);
let ylinha = ((-coeficienteB + Math.sqrt(delta)) / (2 * coeficienteA));
let y2linha =  ((-coeficienteB - Math.sqrt(delta)) / (2 * coeficienteA));

if (coeficienteA == 0) {
    console.log("O valor 0 para o coeficiente A é inválido.")
} else {
    console.log(`As raízes dessa equação são: ${ylinha} , ${y2linha}. `)
}
