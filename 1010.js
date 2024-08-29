// BEE1010

// Entrada de valores
var input = require('fs').readFileSync('data/1010.txt', 'utf8');
var lines = input.split('\r\n');

// Declarando variáveis da peça 1
let peca1 = lines[0].split(' ');
let numPeca1 = parseInt(peca1[1]);
let valorPeca1 = parseFloat(peca1[2])

// Declarando variáveis da peça 2
let peca2 = lines[1].split(' ');
let numPeca2 = parseInt(peca2[1]);
let valorPeca2 = parseFloat(peca2[2])

// Calculando o valor a pagar
let valorPagar = numPeca1 * valorPeca1 + numPeca2 * valorPeca2

console.log(`VALOR A PAGAR: R$ ${valorPagar.toFixed(2)}`)