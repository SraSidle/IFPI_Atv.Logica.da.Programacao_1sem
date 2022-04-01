//Leia um valor em m, calcule e escreva o equivalente em cm.
console.clear();
const prompt = require ('prompt-sync')();

const metros = prompt('Adicione um valor em metros. ');
const cm = (metros * 100);

   if (metros == 1) { //condicionais para responder ao usuário com concordância
    console.log(metros , 'metro equivale a:' , cm , 'centímetros. ' )
} else {
     console.log(metros , 'metros equivalem a:' , cm , 'centímetros'); 
}