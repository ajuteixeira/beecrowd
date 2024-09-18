// BEE1016

// Entrada de valores
const input = require('fs').readFileSync('data/1016.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis
let distancia = parseInt(lines[0]);

// Calculando o tempo
let tempo = distancia * 60 / 30;

// Imprimindo resultados
console.log(`${tempo} minutos`);