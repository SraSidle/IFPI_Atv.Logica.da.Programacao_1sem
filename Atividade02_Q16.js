//Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)
console.clear();
const prompt = require ('prompt-sync')();

function areaQuadrado (lado , area) {
    lado = +prompt('Adicione o valor do lado do quadrado. ')
    area = (lado ** 2) // (**) é o operador de exponenciação
        console.log()
        console.log(`A área do quadrado de lado '${lado}' é igual a '${area}'`)    
}

areaQuadrado();