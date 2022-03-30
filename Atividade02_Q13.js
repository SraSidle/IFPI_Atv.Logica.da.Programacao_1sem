//Leia um valor em real (R$), calcule e escreva 70% deste valor.
console.clear();
const prompt = require('prompt-sync')();

function porcetagemdeValor (valor, porcentagem) {
    valor = +prompt('Adicione um valor em Real(R$). ')
    porcentagem = Math.trunc((valor / 100) * 70) //parâmetro para calcular 70% de valor sem casas decimais
    
    console.log(`70% de R$ ${valor} é igual a: R$ ${porcentagem} reais. `) //retorna resultado ao usuário

}

porcetagemdeValor(); //chama função