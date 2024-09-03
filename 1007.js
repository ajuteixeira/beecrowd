// BEE1007

// Entrada de valores
let input = require('fs').readFileSync('data/1007.txt', 'utf8');
let lines = input.split('\r\n');

// Declaração de variáveis
let A = parseInt(lines[0]);
let B = parseInt(lines[1]);
let C = parseInt(lines[2]);
let D = parseInt(lines[3]);

// Calculando a diferença entre os produtos
let DIFERENCA = (A * B) - (C * D);

// Saída de resultados
console.log(`DIFERENCA = ${DIFERENCA}`)