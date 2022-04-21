/*Leia uma data (dia, mes e ano) e verifique se a data é válida */
const prompt = require ("prompt-sync")();

let data = prompt('Adicione uma data no formato: dd mm aaaa. ');
const separa = data.split(" "); 
//separação dos números entre espaços.
let dia = +separa[0]; 
let mes = +separa[1];
let ano = +separa[2];
// conversão desses valor em string para number.
function bissexto (e , n) {

       if((ano % 400 == 0) || ((ano % 4 ==0) && (ano % 100 != 0))){
        e = 1
    } else {
       n  = 1
    }
} //função para verificar se o ano é bissexto, se sim, fev => 29 dias, se não fev => 28 dias

function verificames (){
    if((mes > 12) || (mes < 1)){
       console.log(`Esse mês não é válido.`)
    } else {
        console.log(`mês válido.`)
    }
} // verificar se o número que corresponde ao mês é ou não válido

function validaDias () {
    if((mes == 1) || (mes == 3) || (mes == 5) || (mes == 7) || (mes == 8) || (mes == 10) || (mes == 12)) {
        if((dia > 31) || (dia < 1)) {
            console.log(`Esse dia não é válido. Adicione um número entre 1 e 31.`)
        }
    } else if ((mes == 4) || (mes == 6) || (mes == 9) || (mes == 11)) {
        if((dia > 30) || (dia < 1)) {
           console.log(`Esse dia não é válido. Adicione um número entre 1 e 30. `)
        }
    } else if (mes == 2) {

        if (bissexto(1 , 0)) {
           if((dia > 29) || (dia < 1)){
               console.log(`Esse mês tem até 29 dias.`)
           }
        } else if ((dia > 28 || (dia < 1))) {
            console.log(`Esse mês tem até 28 dias.`)
        }
    } 
}

function verificaano (){
    if((ano > 2100) || (ano < 1)) {
        console.log(`Esse ano é inválido. Digite um valor entre 1 e 2100.`)   
    }
     validaDias()
     verificames();

}

// function correto() {
    
//     if((verificaano.value = true) ) {
//         console.log(`Essa data é válida`)
//     } else{
//         console.log(`Essa data não é válida.`)
//      }
// }
//tentei, não rolou dessa vez
verificaano();
