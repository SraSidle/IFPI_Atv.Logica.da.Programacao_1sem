//Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)
console.clear();

const prompt  = require ('prompt-sync')();
const colors = require ('colors');

const apresentacao = ('         Cálculo do cumprimento de uma circunferência'.blue.bgBlack)//comando para mudar
console.log(apresentacao); //as cores dos caracteres no terminal
console.log(`

`)
function compri_C (raio , pi , cumprimento) {
    raio = +prompt('Adicione o valor do raio da circunferência ')
    console.clear(prompt('Aperte ENTER para continuar. '))

    pi = 3.14
    cumprimento = ((raio * 2) * pi) // fórmula para retornar o cumprimento da circunfer~encia

    console.log(`O cumprimento dessa circunferência é: ${cumprimento}`.blue)
}

compri_C();

 