// BEE1006

// Entrada de valores
let input = require('fs').readFileSync('data/1006.txt', 'utf8');
let lines = input.split('\r\n');

// Declaração de variáveis
let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let C = parseFloat(lines[2]);

// Calculando a média ponderada
let MEDIA = ((A * 2) + (B * 3) + (C * 5)) / 10;

// Saída de resultados
console.log(`MEDIA = ${MEDIA.toFixed(1)}`)