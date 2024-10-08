// BEE1060

// Entrada de valores
const input = require('fs').readFileSync('data/1060.txt', 'utf8');
const lines = input.split('\r\n');

// Declaração de variáveis
let num;
let n = lines.length;
let positivos = 0;

// Construindo a estrutura de repetição
for (let i = 0; i < n; i++) {
  num = parseFloat(lines[i]);
  if (num > 0) {
    positivos += 1;
  }
}

console.log(`${positivos} valores positivos`);
