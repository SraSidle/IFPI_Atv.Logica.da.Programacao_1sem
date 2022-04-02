//Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.
console.clear();
const prompt = require ('prompt-sync')();

function int() {
    let numero  = +prompt('Adicione um número de 3 dígitos. ' )
    const centena = numero / 100
    const dezena = ((numero % 100) / 10)
    const unidade = (numero % 10)
    let  inversao = (unidade , dezena , centena)
    let subtraçao = numero - inversao
console.log(inversao)
    console.log(`A soma do número ${numero} com seu inverso ${inversao} é igual a ${subtraçao}`)
}
    int();