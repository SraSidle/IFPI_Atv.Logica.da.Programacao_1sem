//Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.

 console.clear();
 const prompt = require('prompt-sync')();

   let saudacao = prompt('Olá, iremos converter sua idade de anos para dias.  ');
   let manual = prompt('Preecha corretamente os dias que viveu, com apenas números. ');
      console.clear();
  
   let dias = +prompt('Digite quantos dias você viveu. ');
      console.clear();

   let diasParaAnos = Math.trunc(dias / 365);
   // (Math.trunc) Essa função retorna a parte inteira de um número, sem suas casas decimais.
   let meses = Math.trunc((dias % 365) / 30) ; 
   // calculo único para tirar primeiro o resto de dias e depois dividir por 30.
   let restodias = Math.trunc((dias % 365) % 30);
   //calculo único para para tirar primeiro o resto de dias e depois o resto de 30.
      console.log(` Você viveu: ${diasParaAnos} anos, ${meses} meses e ${restodias} dias! `);