// BEE1067

// Entrada de valores
const input = require('fs').readFileSync('data/1067.txt', 'utf8');
const lines = input.split('\r\n');

// Declaração de variáveis
let num = parseInt(lines[0]);

// Construindo a estrutura de repetição
for (let j = 1; j <= num; j++) {
  if (j % 2 != 0) {
    console.log(j);
  }
}
