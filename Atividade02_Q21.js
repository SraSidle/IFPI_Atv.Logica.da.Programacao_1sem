//Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).
console.clear();
const prompt = require ('prompt-sync')();

function conversaoDeT ( fahrenheit , Celsius){
   fahrenheit = +prompt('Adicione uma temperatura em graus Fahrenheit. ')
   Celsius  = ((5 * fahrenheit - 160) / 9) //Fórmula para conversão de Fahrenheit para  Celsius

    console.clear();
    console.log('A conversão de' ,fahrenheit , 'Fahrenheit para celsius é igual a:' , Celsius , 'graus Celsius')
}

conversaoDeT();