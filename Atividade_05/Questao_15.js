//Leia a quantidade de horas dadas por dois professores e o valor por hora recebido por cada um. Diga qual ganha mais.
const prompt = require("prompt-sync")();

let horap = +prompt(`Adicione quantas horas trabalha o professor 1. `);
let precophr = +prompt(`Adicione o valor que ele recebe por hora. `);
console.clear();

let horap2 = + prompt(`Adicione quantas horas trabalha o professor 2. `);
let precophr2 = +prompt(`Adicione o valor que ele recebe por hora. `);
console.clear();

let ganho1 = horap * precophr;
let ganho2 = horap2 * precophr2;

if (ganho1 > ganho2) {
    console.log(`O professor 1 ganha mais.`)
} else {
    console.log(`O professor 2 ganha mais.`)
}