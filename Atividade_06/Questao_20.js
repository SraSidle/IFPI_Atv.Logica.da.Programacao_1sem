/**Leia a medida de um âmgulo entre 0 e 360 graus e escreva o quadrante. Primeiro, segundo , terceiro ou quarto em
 * que o ângulo se localiza. */

const prompt = require("prompt-sync")();

let angulo = +prompt("Informe um ângulo da circunferência entre 1 e 360.  ");

if ((angulo > 360) || (angulo < 1)) {
    console.log("Digite um número entre 1 e 360.")
} else if (angulo <= 90) {
    console.log("Esse ângulo está no quadrante I da circunferência. ")
} else if (angulo <= 180) {
    console.log("Esse ângulo está no quadrante II da circunferência. ")
}  else if (angulo <= 270) {
    console.log("Esse ângulo está no quadrante III da circunferência. ")
} else if (angulo <= 360) {
    console.log("Esse ângulo está no quadrante IV da circunferência. ")
}