// BEE1043

// Entrada de valores
const input = require('fs').readFileSync('data/1043.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis
let line = lines[0].split(' ');
let A = parseFloat(line[0]);
let B = parseFloat(line[1]);
let C = parseFloat(line[2]);

// Construindo a estrutura condicional
if (A + B > C && A + C > B && B + C > A) {
  let perimetro = A + B + C;
  console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
  let area = ((A + B) * C) / 2;
  console.log(`Area = ${area.toFixed(1)}`);
}
