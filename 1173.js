// BEE1173

// Entrada de valores
const input = require('fs').readFileSync('data/1173.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis
num = parseInt(lines[0]);
let j;

// Imprimindo a primeira linha
console.log(`N[0] = ${num}`);

// Construindo e imprimindo as outras linhas
for (let i = 1; i < 10; i++) {
  num *= 2;
  j = num;
  console.log(`N[${i}] = ${j}`);
}
