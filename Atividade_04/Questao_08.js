//Leia data atual (dia, mes e ano) e data de nascimentos(dia, mes e ano) de uma pessoa, calcule escreva sua idade exata
// em anos
const prompt = require("prompt-sync")();

let dataAtual = prompt('Digite os números que correspondem à data atual. Separado por espaços.   ');
let dataNasc = prompt('Digite os números que correspondem à sua data de nascimento. Separado por espaços. ');

const separaAtual = dataAtual.split(" ");
const separaNasc = dataNasc.split(" ");

const diaAtual = +separaAtual[0];
const mesAtual = +separaAtual[1];
const anoAtual = +separaAtual[2];

const diaNasc = +separaNasc[0];
const mesNasc = +separaNasc[1];
const anoNasc = +separaNasc[2];

const diaTotal = diaAtual - diaNasc;
const mesTotal = mesAtual - mesNasc;
const anoTotal = anoAtual - anoNasc;

function anos(){

    const todosDias = diaTotal + (mesTotal * 30)  + (anoTotal * 365);
    const anosVividos = Math.trunc(todosDias / 365);
    console.log(`Você viveu ${anosVividos} anos.`);
}

anos();