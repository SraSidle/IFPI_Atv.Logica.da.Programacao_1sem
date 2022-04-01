//Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).
const prompt = require ('prompt-sync')();

const kg = +prompt('Adicione um valor em quilogramas. ');
const gramas = (kg * 1000);


   if(kg == 1) {
    console.log(kg , 'quilograma equivale a:' , gramas , 'gramas');
}  else {
console.log(kg , 'quilogramas equivalem a:' , gramas , 'gramas.');

}