/* Existem números de 4 dígitos (Entre 1000 9999) que obedecem á seguinte característica: se dividirmos o número em 
dois números de dois dígitos, um composto pela dezena e pela unidade, e outro pelo terceiro número é exatamente o número
original de 4 dígitos. Por exemplos: 2025 -> dividindo 20 e 25 -> somado temos 45 -> 45 ** 2 == 25*/
const prompt = require("prompt-sync")();

let num = prompt("Adicione um número de 4 dígitos. ");
let number = +num
let digitos = num.split("");

let milharCentena = +(digitos[0] + digitos[1]);
let unidadeDezena = +(digitos[2] + digitos[3]);

let raizTeste = milharCentena + unidadeDezena ;
let raizReal = Math.sqrt(number) ;

if (raizTeste == raizReal) {
    console.log(`O número " ${number} " obedece à seguinte característica: seus dois primeiros dígitos e seus dois últimos dígitos:
     " ${milharCentena} " + " ${unidadeDezena} " ** 2 é igual a raíz quadrada desse número: ${raizReal}. `)
} else {
    console.log(`O número " ${number} " não obedece à seguinte característica: seus dois primeiros dígitos e seus dois últimos dígitos:
    " ${milharCentena} " + " ${unidadeDezena} " ** 2 é diferente da raíz quadrada desse número: ${raizReal}. `)
}