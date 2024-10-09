// BEE1073

// Entrada de valores
const input = require('fs').readFileSync('data/1073.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis
let n = parseInt(lines[0]);

// Construindo a estrutura de repetição
for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    let quadrado = i ** 2;
    console.log(`${i}^2 = ${quadrado}`);
  }
}
