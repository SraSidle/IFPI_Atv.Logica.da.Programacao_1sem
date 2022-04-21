/*Leia 3 números, cada número corresponde ao ângulo interno de um triângulo, verifiquee e escreva se os 3 números formam um triângulo
verifique se a soma dos ângulos internos é igual a 180. Se formam um triângulo, verifique se é ancutângulo(3 angulos < 90), retângulo
(1 ângulo = 90) obtusângulo (1 ângulo > 90). Não existe ângulo =< 0*/
const prompt = require('prompt-sync')();

const angulos = prompt('Adicione os 3 ângulos de um triângulo. ');
console.clear();

const separar = angulos.split(" ");
let ang1 = +separar[0];
let ang2 = +separar[1];
let ang3 = +separar[2];

let soma = ang1 + ang2 + ang3;

function verificar (){
     if(soma == 180 && ang1 > 0 && ang2 > 0 && ang3 > 0) {
        console.log(`Esses números correspondem a um triângulo.\n`)
        prompt('pressione ENTER para continuar.')
        console.clear();

     if(ang1 < 90 && ang2 < 90 && ang3 < 90){
         console.log(`Esse triângulo é Ancutângulo.`)

     } else if(ang1 == 90 || ang2 == 90 || ang3 == 90) {
         console.log(`Esse triângulo é retângulo.`)

     } else if(ang1 > 90 || ang2 > 90|| ang3 > 90) {
         console.log(`Esse triãngulo é obtusângulo.`)
     }

    } else if (soma !== 180 || ang1 <= 0 || ang2 <= 0 || ang3 <= 0){ 
        console.log(`Esses números nâo correspondem a um triângulo.`)
    }
}

verificar();