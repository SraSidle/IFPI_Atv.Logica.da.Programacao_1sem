//Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)
 console.clear();
const prompt = require('prompt-sync')();

function inversaonumeros() {
    let numero  = prompt('Adicione um número de 3 dígitos. ' )
    let numeros = numero.split(''); //usa esse recurso que separará cada caractere (split)

        console.clear();

  let num1 = numeros[0]; //os caracteres serão colocados dentro de um array, ainda como string
  let num2 = numeros[1];
  let num3 = numeros[2];

        console.log(`A inversão das posições de ${numero} é igual a: ${num3 + num2 + num1}`)
}// serão retornados na ordem pedida

inversaonumeros();// chamar função