// BEE1021

// Entrada de valores
var input = require('fs').readFileSync('data/1021.txt', 'utf8');
var lines = input.split('\r\n');

// Declarando variáveis
let valInicial = parseFloat(lines[0]);
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

// Convertendo a parte decimal em inteiro
valAtual = parseInt(Math.floor((valAtual *= 100)));
valAtual;

// Calculando quantidade de moedas de acordo com o valor de cada uma
let moedaUmReal = Math.floor(valAtual / 100);
valAtual %= 100;

let moedaCinquenta = Math.floor(valAtual / 50);
valAtual %= 50;

let moedaVinteCinco = Math.floor(valAtual / 25);
valAtual %= 25;

let moedaDez = Math.floor(valAtual / 10);
valAtual %= 10;

let moedaCinco = Math.floor(valAtual / 5);
valAtual %= 5;

let moedaUm = valAtual;

// Exibindo resultados
console.log(`NOTAS:
${notaCem} nota(s) de R$ 100.00
${notaCinquenta} nota(s) de R$ 50.00
${notaVinte} nota(s) de R$ 20.00
${notaDez} nota(s) de R$ 10.00
${notaCinco} nota(s) de R$ 5.00
${notaDois} nota(s) de R$ 2.00
MOEDAS:
${moedaUmReal} moeda(s) de R$ 1.00
${moedaCinquenta} moeda(s) de R$ 0.50
${moedaVinteCinco} moeda(s) de R$ 0.25
${moedaDez} moeda(s) de R$ 0.10
${moedaCinco} moeda(s) de R$ 0.05
${moedaUm} moeda(s) de R$ 0.01`)