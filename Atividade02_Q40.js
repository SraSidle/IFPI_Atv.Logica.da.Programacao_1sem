//Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele
//fuma, o no de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).

console.clear();
const prompt = require ('prompt-sync')();

const anosfum = +prompt('A quantos anos você fuma? ');
const quantCigarros = +prompt('Quantos cigarros você fuma por dia? ');
const preco = +prompt('Qual o preço da carteira de cigarro? ')

const dias = anosfum * 365
const dinheiroGasto = Math.trunc(quantCigarros * dias * preco) / 20

console.log('você gastou R$:' , dinheiroGasto , 'reais!')