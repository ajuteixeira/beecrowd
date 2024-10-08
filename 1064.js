// BEE1064

// Entrada de valores
const input = require('fs').readFileSync('data/1064.txt', 'utf8');
const lines = input.split('\r\n');

// Declaração de variáveis
let num;
let n = lines.length;
let positivos = 0;
let soma = 0;
let media;

// Construindo a estrutura de repetição
for (let i = 0; i < n; i++) {
  num = parseFloat(lines[i]);
  if (num > 0) {
    positivos += 1;
    soma += num;
    media = soma / positivos;
  }
}

// Imprimindo resultados
console.log(`${positivos} valores positivos`);
console.log(media.toFixed(1));
