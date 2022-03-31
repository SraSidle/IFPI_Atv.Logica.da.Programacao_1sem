//Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)

console.clear();
const prompt = require ('prompt-sync')();

function esferaV(raio , pi , volume){
    
    raio = +prompt('Adicione o valor do raio da esfera. ')
    pi = 3.14
    volume = Math.trunc(4 * pi * (raio ** 3) / 3 )

    console.clear();
    console.log(`O volume dessa circunferência é: ${volume}`)

}
esferaV();