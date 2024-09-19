// BEE1041

// Entrada de valores
const input = require('fs').readFileSync('data/1041.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis
let line = lines[2].split(' ');
let x = parseFloat(line[0]);
let y = parseFloat(line[1]);

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
  console.log('Eixo X');
} else if (y == 0) {
  console.log('Eixo Y');
}