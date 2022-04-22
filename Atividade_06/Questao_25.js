/*Verifique a validade de um senha fornecida pelo usuário. A senha é 1234. Deve retornar uma mensagem de permissão de 
acesso ou não.*/
const prompt = require("prompt-sync")();
const colors = require("colors");

let senha = prompt("Digite sua senha: ");

if (senha == 1234) {
    console.log("Acesso permitido. ".green)
} else {
    console.log("Acesso negado. ".red)
}