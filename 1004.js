// BEE1004

// Entrada de valores
let input = require('fs').readFileSync('data/1004.txt', 'utf8');
let lines = input.split('\r\n');

// Declaração de variáveis
let num1 = parseInt(lines[0]);
let num2 = parseInt(lines[1]);

// Calculando a soma
let PROD = num1 * num2;

// Saída de resultados
console.log(`PROD = ${PROD}`)