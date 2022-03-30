//Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)
console.clear();
const prompt = require('prompt-sync')();

 function areaRetangulo (base , altura , area) {

     base = +prompt('Adicione o valor da base do retângulo. ')
     altura = +prompt('Adicione o valor da altura do retângulo. ')
     area = (base * altura)// fórmula para obter a area de um retângulo
    
        console.clear();

        if (base == altura){
            console.log('Isso é um quadrado. De área:', area) //brincadeirinha com o usuário. Uso de condicionais para retornar
     } else {console.log('A área desse retângulo é igual a:' , area ) //algo diferente caso base e altura sejam iguais

   }
}

 areaRetangulo();