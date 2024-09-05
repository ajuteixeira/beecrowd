// BEE1011

// Entrada de valores
const input = require('fs').readFileSync('data/1011.txt', 'utf8');
const lines = input.split('\r\n');

// Declaração de variáveis
let R = parseInt(lines[0]);
const PI = 3.14159;

// Calculando o volume da esfera
let vol = (4/3) * PI * (R ** 3);

// Saída de resultados
console.log(`VOLUME = ${vol.toFixed(3)}`)