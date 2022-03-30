//Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.
console.clear();
const prompt = require('prompt-sync')();

function mediaNotas (nota1, nota2, nota3, peso1 , peso2, peso3, total, media){ //parâmetros
    nota1 = +prompt('Adicione a primeira nota do(a) Aluno(a). ') //pedido da nota 1 e o peso dessa nota abaixo
    peso1 = +prompt('Adicione o peso dessa nota ')

    nota2 = +prompt('Adicione a segunda nota do(a) Aluno(a). ') //idem linha 6
    peso2 = +prompt('Adicione o peso dessa nota ')

    nota3 = +prompt('Adicione a terceira nota do Aluno. ') //idem linha 6
    peso3 = +prompt('Adicione o peso dessa nota ')
   
    total = Math.trunc((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) // fórmula para calcular um valor
//total da nota com os pesos
    media = (total/(peso1 + peso2 + peso3)) //divisão desse valor, retornando uma média

        console.clear();
        console.log(`A média desse(a) aluno(a) é: ${media}`) // retorno da média
}

mediaNotas(); //chamar função