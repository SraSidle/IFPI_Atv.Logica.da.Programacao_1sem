/*Determine a idade de uma pessoa em anos, meses e dias, dada a data (dia, mes, ano) do seu nascimento e 
(dia, mes , ano)atual */

console.clear();
  const prompt = require('prompt-sync')();

    console.log(`Olá, vamos calcular quantos dias você viveu. \n   
    Preecha corretamente, apenas números para representar as informações.`) ;
    prompt();
       console.clear();

    let diaAtual = +prompt('Qual o dia de hoje? ex(22) '); 
    let mesAtual = +prompt('Digite o número do mês atual ex(4) ');
    let anoAtual = +prompt('Em que ano estamos? ex(2022) ');
      console.clear();

    let diaNasc  = +prompt('Digite o dia que você nasceu. ex(11) ');
    let mesNasc  = +prompt('Digite o número do mês do seu nascimento(4) ');
    let anoNasc  = +prompt('Qual ano você nasceu? (2002) ');
       console.clear();

    let subdia = diaAtual - diaNasc; //valor para saber dias vividos
    let submes = mesAtual - mesNasc; //valor para saber meses que sobram ou faltam dos anos completos
    let subaano = anoAtual - anoNasc; // valor para os anos 

    console.log(`Você viveu aproximadamente :${subaano} anos ${submes} meses  e ${subdia}dias.`); //resultado final 