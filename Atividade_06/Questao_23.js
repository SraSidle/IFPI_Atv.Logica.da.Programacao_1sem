/* Leia duas datas (dd/mm/aaaa) Escreva qual a mais recente.*/
const prompt = require("prompt-sync")();

let data1 = prompt("Adicione a data 1. Ex: dd mm aaaa " );
let data2 = prompt("Adicione a data 2. Ex: dd mm aaaa " );

const separa1 = data1.split(" ");
const separa2 = data2.split(" ");

let valor1 = +(separa1[2] + separa1[1] +separa1[2]);
let valor2 = +(separa2[2] + separa2[1] +separa2[2]);

    if (valor1 > valor2) {
    console.log(`${data1} é a data mais recente.`)
} else {
    console.log(`${data2} é a data mais recente.`)
}


   