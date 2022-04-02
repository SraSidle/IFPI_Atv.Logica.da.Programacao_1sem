//Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.

//Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. Exemplo: eu tenho 30 anos, 
// exercicio feito posteriormente, com algumas alterações para adaptar à questão
console.clear();
const prompt = require('prompt-sync')();

  let ola = prompt('Olá, vamos calcular quantos dias você viveu. ');   
  let manual = prompt('Preecha corretamente, apenas números para representar as informações ');
     console.clear();

  let diaAtual = prompt('Qual o dia de hoje '); 
  let mesAtual = prompt('Digite o número do mês atual ');
  let anoAtual = prompt('Em que ano estamos? ');
    console.clear();

  let diaNasc  = prompt('Digite o dia que você nasceu. ');
  let mesNasc  = prompt('Digite o número do mês do seu nascimento ');
  let anoNasc  = prompt('Qual ano você nasceu? ');
     console.clear();

  let diferencadia = diaAtual - diaNasc; //valor para saber dias vividos
  let diferencames = mesAtual - mesNasc; //valor para saber meses que sobram ou faltam dos anos completos
  let diferencaano = anoAtual - anoNasc; // valor para os anos 

  let multiM = diferencames * 30 ;  //converte meses em dias
  let muitiA = diferencaano * 365 ; //converte anos em dias 

     console.log(` Você viveu aproximadamente :${multiM +  muitiA + diferencadia} dias!`); //resultado final