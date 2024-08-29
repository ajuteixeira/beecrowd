// BEE1001

// Entrada de valores
let input = require('fs').readFileSync('data/1001.txt', 'utf8');
let lines = input.split('\r\n');

// Declarando variáveis
let A = parseInt(lines[0]);
let B = parseInt(lines[1]);

// Calculando a soma
let X = A + B;

// Saída de resultados
console.log(`X = ${X}`)