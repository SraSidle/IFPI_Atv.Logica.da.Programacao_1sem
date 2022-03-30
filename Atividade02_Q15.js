//Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)
console.clear();
const prompt = require ('prompt-sync')();


function calcularAreaT(base , altura ,area) {
     base = +prompt('Informe a medida da base do triângulo ') //base
      console.log()

     altura = +prompt('Informe a medida da altura do triângulo ') //altura
     area = Math.trunc((base * altura) / 2) //fórmula para obter a área do triângulo

      console.clear();
      console.log(`A área desse triângulo é: ${area} cm ** 2. `)

}

calcularAreaT(); //chamar função