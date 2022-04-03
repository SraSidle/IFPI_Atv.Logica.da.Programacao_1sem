//Uma loja vende seus produtos no sistema entrada mais duas prestações, sendo a entrada maior ou igual a cada uma das duas prestações;
//estas devem ser iguais, inteiras e as maiores possíveis. Por exemplo, se o valor da mercadoria for R$ 270,00, a entrada e as duas prestações
//são iguais a R$ 90,00; se o valor da mercadoria for R$ 302,00, a entrada é de R$ 102,00 e as duas prestações são iguais a R$ 100,00.
// Escreva um algoritmo que receba o valor da mercadoria e forneça o valor da entrada e das duas prestações, de acordo com as regras acima.
console.clear();
const prompt = require('prompt-sync')();

const valor = +prompt('Adicione o valor da compra. ');
const prestacao = Math.trunc(valor / 3)//divide a compra por 3 sem casas decimais

const resto = (valor % 3) //pega o restante, caso "prestacao" não seja um valor inteiro.
const entrada = prestacao + resto //soma a prestação + resto.  Se prestacao == 0, serão entrada e prestações iguais. Senão entrada > prestações

      if (resto == 0){ // condicionais para retornar ao consumidor o valor de entrada e prestações de acordo com a situação.
         console.log(`O pagamento dessa compra será: R$${entrada} reais de entrada e duas prestações de: R$${prestacao} reais.`)     
      } else {
        console.log(`O pagamento dessa compra será: R$${entrada} reais de entrada e duas prestações de: R$${prestacao} reais.`)  
      }
      
            
        