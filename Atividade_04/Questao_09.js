/* Leia um número de 0 a 100, verifique escreva se o número é primo ou não*/
const prompt = require("prompt-sync")();

let numero = +prompt("Adicione um número de 1 a 100. ");

  function ePrimo () {
       if((numero == 2) || (numero == 3) || (numero == 5) || (numero == 7) || (numero == 11) || (numero == 13) || (numero == 17)
       || (numero == 19) || (numero == 23) || (numero == 29) || (numero == 31) || (numero == 37) || (numero == 41) || (numero == 43)
       || (numero == 47) || (numero == 53) || (numero == 59) || (numero == 61) || (numero == 67) || (numero == 71) || (numero == 73) 
       || (numero == 79) || (numero == 83) || (numero == 89) || (numero == 97)) {
     
        console.log(`Esse número é primo.`)
  } else {
        console.log(`Esse número não é primo.`)
  }
}
  ePrimo();