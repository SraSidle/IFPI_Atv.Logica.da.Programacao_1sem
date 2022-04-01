//Leia um valor em km, calcule e escreva o equivalente em m.
const prompt = require('prompt-sync')();

const km = +prompt('Adicione um valor em KM. ');//entrada do valor
const metros = (km * 1000);//variável conversão km para metros

console.log(km , 'Km é igual a:' , metros , 'metros.'); //retorno da resposta