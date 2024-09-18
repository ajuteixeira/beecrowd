// BEE1019

// Entrada de valores
const input = require('fs').readFileSync('data/1019.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis
let tempo = parseInt(lines[0]);

// Calculando o tempo com base em segundos
let horas = Math.floor(tempo / 3600);
tempo %= 3600;

let minutos = Math.floor(tempo / 60);
tempo %= 60;

let segundos = tempo;

// Imprimindo resultados
console.log(`${horas}:${minutos}:${segundos}`);