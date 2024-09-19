// BEE1041

// Entrada de valores
const input = require('fs').readFileSync('data/1041.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis
let x = parseFloat(lines[0]);
let y = parseFloat(lines[1]);

// Construindo a estrutura condicional
if (y > 0 && x > 0) {
  console.log('Q1');
} else if (y > 0 && x < 0) {
  console.log('Q2');
} else if (y < 0 && x < 0) {
  console.log('Q3');
} else if (y < 0 && x > 0) {
  console.log('Q4');
} else if (y == 0 && x == 0) {
  console.log('Origem');
} else if (x == 0) {
  console.log('Eixo Y');
} else if (y == 0) {
  console.log('Eixo X');
}