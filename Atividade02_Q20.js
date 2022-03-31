//Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)
console.clear();
const prompt = require ('prompt-sync')();

function conversaoDeT (Celsius , fahrenheit){
    Celsius = +prompt('Adicione uma temperatura em Celsius. ')
    fahrenheit = ((9 * Celsius + 160) / 5) //Fórmula para conversão de Celsius para Fahrenheit 

    console.clear();
    console.log('A conversão de' ,Celsius , 'celsius para Fahrenheit é igual a:' , fahrenheit , 'graus Fahrenheit')
}

conversaoDeT();