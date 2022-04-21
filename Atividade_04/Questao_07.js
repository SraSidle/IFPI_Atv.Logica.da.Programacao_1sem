/*Leia 3 números, cada número corresponde a 1 lado de um triângulo verifique e escreva se os três números formam
um triângulo (a soma de dois lados não pode ser menor que o terceiro lado. Se fromam, verifique se é equilátero(3 lados iguais)
isóceles(2 lados iguais) ou escaleno(3 lados diferentes) não existe lado <= 0*/

const prompt = require('prompt-sync')();

const lados = prompt('Adicione os 3 lados de um triângulo. ');
console.clear();

const separar = lados.split(" ");
let lado1 = +separar[0];
let lado2 = +separar[1];
let lado3 = +separar[2];

let soma1 = lado1 + lado2 ;
let soma2 = lado1 + lado3 ;
let soma3 = lado2 + lado3 ;

function verificar (){

     if((soma1 > lado3) && (soma2 > lado2) && (soma3 > lado1)) {
        console.log(`Esses números correspondem aos lados um triângulo.\n`)
        prompt('pressione ENTER para continuar.')
        console.clear();

            if ((lado1 == lado2) && (lado2 == lado3)) {
         console.log(`Esse triângulo é Equilátero.`)

     } else if (((lado1 == lado2) && (lado1 !== lado3))|| (lado1 == lado3 && (lado1 !== lado2)) || (lado2 == lado3 && (lado2 !== lado1))) {
         console.log(`Esse triângulo é Isóceles.`)

     } else if((lado1 !== lado2) && (lado1 !== lado3) && (lado2 !== lado3)) {
         console.log(`Esse triãngulo é escaleno.`)

     } 

    }  else {
        console.log(`Esses números nâo correspondem aos lados de um triângulo.`)
  }
}

verificar();