/*Leia 4 numeros (opção 1, num1 , num2 , num3) e que escreva o valor de num1 se opção igual a 1; o valor de num2 se opção for igual a 2
e o valor de num3 se a opção for igual a 3. Os únicos valores possíveis para a variável opção são 1 , 2 ,3.
*/
const prompt = require("prompt-sync")();

prompt(`
 Será requisitado 4 valores \n
- Adicione um valor para opção entre 1 e 3. \n
- qualquer valor numérico para os 3 números. \n

Aperte ENTER para continuar. `);

console.clear();

let num = prompt("Adicione 4 valores: (opção , num1 , num2 , num3). ");
const nums = num.split(" ");

    let opcao = +nums[0];
    let num1 = +nums[1];
    let num2 = +nums[2];
    let num3 = +nums[3];

let opcoes = ["não" , num1 , num2 , num3];

    if((opcao == 0) || (opcao > 4)) {
    console.log(`Adicione um número para opção entre 1 e 3`)
} else {
    console.log(`Você escolheu o número: ${opcao} ${opcoes[opcao]}. `);
}

