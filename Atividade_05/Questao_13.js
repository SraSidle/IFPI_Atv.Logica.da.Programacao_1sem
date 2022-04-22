/*Leia 5 números inteiros e escreva o maior e o menor entre eles. Considere que todos os valores são 
diferentes. */
const prompt = require("prompt-sync")();

let numeros = prompt("Adicione 5 números inteiros. ");
let num = numeros.split(" ");

let num1 = +num[0];
let num2 = +num[1];
let num3 = +num[2];
let num4 = +num[3];
let num5 = +num[4];

if((num1 > num2) && (num1 > num3) && (num1 > num4) && (num1 > num5)) {
  console.log(`${num1} é o maior`)
} else if ((num2 > num1) && (num2 > num3) && (num2 > num4) && (num2 > num5)) {
  console.log(`${num2} é o maior`)
} else if ((num3 > num3) && (num3 > num2) && (num3 > num4) && (num3 > num5)) {
  console.log(`${num3} é o maior`)
} else if ((num4 > num1) && (num4 > num2) && (num4 > num3) && (num4 > num5)) {
    console.log(`${num4} é o maior.`)
} else if ((num5 > num1) && (num5 > num2) && (num5 > num3) && (num5 > num4)) {
    console.log(`${num5} é o maior.`)
}

if((num1 < num2) && (num1 < num3) && (num1 < num4) && (num1 < num5)) {
    console.log(`${num1} é o menor`)
  } else if ((num2 < num1) && (num2 < num3) && (num2 < num4) && (num2 < num5)) {
    console.log(`${num2} é o menor`)
  } else if ((num3 < num3) && (num3 < num2) && (num3 < num4) && (num3 < num5)) {
    console.log(`${num3} é o menor`)
  } else if ((num4 < num1) && (num4 < num2) && (num4 < num3) && (num4 < num5)) {
      console.log(`${num4} é o menor.`)
  } else if ((num5 < num1) && (num5 < num2) && (num5 < num3) && (num5 , num4)) {
      console.log(`${num5} é o menor.`)
  }