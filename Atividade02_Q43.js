//Um sistema de equações lineares do tipo , pode ser resolvido segundo mostrado abaixo

console.clear();
const prompt = require('prompt-sync')();

let a = +prompt('Adicione o número que equivale a "a". '); // pedido do número que irá representar as letras
let b = +prompt('Adicione o número que equivale a "b". ');
let c = +prompt('Adicione o número que equivale a "c". ');
let d = +prompt('Adicione o número que equivale a "d". ');
let e = +prompt('Adicione o número que equivale a "e". ');
let f = +prompt('Adicione o número que equivale a "f". ')

const x = Math.trunc((c * e) - (b * f) / (a * e) - (b * d)) //fórmula para obter o valor de x
const y = Math.trunc((a * f) - (c * d) / (a * e) - (b * d)) //fórmula para obter o valor de y

console.log(`A resolução desse sistema linear é: X = ${x} , Y = ${y}`);