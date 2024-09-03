// BEE1005

// Entrada de valores
let input = require('fs').readFileSync('data/1005.txt', 'utf8');
let lines = input.split('\r\n');

// Declaração de variáveis
let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);

// Calculando a média ponderada
let MEDIA = ((A * 3.5) + (B * 7.5)) / 11;

// Saída de resultados
console.log(`MEDIA = ${MEDIA.toFixed(5)}`)