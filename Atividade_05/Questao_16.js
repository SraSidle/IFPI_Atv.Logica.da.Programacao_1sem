/* Leia duas notas de um aluno se media >= 7 "Aprovado" se media<= 5""reprovado"  Exame final*/
const prompt = require("prompt-sync")();
const colors = require("colors");

let nota1 = +prompt("Adicione a Nota1 do(a) aluno(a). ");
let nota2 = +prompt("Adicione a Nota2 do(a) Aluno(a). ");

let media = (nota1 + nota2) / 2;

    if(media >= 7){
    console.log(`Aluno(a) Aprovado(a)`.green)
} else if (media <= 5) {
    console.log(`Aluno(a) Reprovado(a)`.red)
} else  {
    console.log(`Exame Final.`.yellow)
}