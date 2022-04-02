//Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.
console.clear();
const prompt = require('prompt-sync')();

function intpBinarios(num) {

 const numero = (num);
 const binario = (numero % 2).toString();
 for(;numero > 1;) {
     num = parseInt(numero / 2);
     binario = (numero % 2) + (binario);
 }
 console.log(binario)
}

intpBinarios(2);