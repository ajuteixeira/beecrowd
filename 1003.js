// BEE1003

// Entrada de valores
let input = require('fs').readFileSync('data/1003.txt', 'utf8');
let lines = input.split('\r\n');

// Declaração de variáveis
let A = parseInt(lines[0]);
let B = parseInt(lines[1]);

// Calculando a soma
let SOMA = A + B;

// Saída de resultados
console.log(`SOMA = ${SOMA}`)