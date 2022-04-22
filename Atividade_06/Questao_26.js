/*Leia os 3 lados de um triângulo e identifique a hipotenusa e os catetos. */
const prompt = require("prompt-sync")();

const lados = prompt('Adicione os 3 lados de um triângulo. (ex: 10 7 7 ): -    ');
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
        
        if((lado1 > lado2) && (lado1 > lado3)) {
            console.log(`Lado 1 de valor = ${lado1} é a hipotenusa e o lado 2 = ${lado2} e o lado 3 = ${lado3} são os catetos. `)
        } else if((lado2 > lado1) && (lado2 > lado3)){
            console.log(`Lado 2 de valor = ${lado2} é a hipotenusa e o lado 1 = ${lado1} e o lado 3 = ${lado3} são os catetos. `)
        } else if((lado3 > lado1) && (lado3 > lado2)){
            console.log(`Lado 3 de valor = ${lado3} é a hipotenusa e o lado 1 = ${lado1} e o lado 2 = ${lado2} são os catetos. `)
        }    

    }  else {
        console.log(`Esses números nâo correspondem aos lados de um triângulo.`)
  }
}

verificar(); 
