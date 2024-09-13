// BEE1018

// Entrada de valores
var input = require('fs').readFileSync('data/1018.txt', 'utf8');
var lines = input.split('\r\n');

// Declarando variáveis
let valInicial = parseInt(lines[0]);
let valAtual = valInicial;

// Calculando quantidade de cédulas de acordo com o valor das notas
let notaCem = Math.floor(valAtual / 100);
valAtual %= 100;

let notaCinquenta = Math.floor(valAtual / 50);
valAtual %= 50;

let notaVinte = Math.floor(valAtual / 20);
valAtual %= 20;

let notaDez = Math.floor(valAtual / 10);
valAtual %= 10;

let notaCinco = Math.floor(valAtual / 5);
valAtual %= 5;

let notaDois = Math.floor(valAtual / 2);
valAtual %= 2;

// Exibindo resultados
console.log(valInicial);
console.log(`${notaCem} nota(s) de R$ 100,00`);
console.log(`${notaCinquenta} nota(s) de R$ 50,00`);
console.log(`${notaVinte} nota(s) de R$ 20,00`);
console.log(`${notaDez} nota(s) de R$ 10,00`);
console.log(`${notaCinco} nota(s) de R$ 5,00`);
console.log(`${notaDois} nota(s) de R$ 2,00`);
console.log(`${valAtual} nota(s) de R$ 1,00`);
