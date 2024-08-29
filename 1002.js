// BEE1002

// Entrada de valores
let input = require('fs').readFileSync('data/1002.txt', 'utf8');
let lines = input.split('\r\n');

// Declarando variáveis
let raio = parseFloat(lines[0]);
const π = 3.14159;

// Calculando a área do círculo
let area = π * (raio ** 2);

// Saída de resultados
console.log(`A=${area.toFixed(4)}`)