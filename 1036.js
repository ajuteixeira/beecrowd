// BEE1036

// Entrada de valores
const input = require('fs').readFileSync('data/1036.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis
let line = lines[0].split(' ')
let a = parseFloat(line[0]);
let b = parseFloat(line[1]);
let c = parseFloat(line[2]);
let delta = b ** 2 - 4 * a * c;

// Construindo a estrutura condicional
if (a != 0 && delta >= 0) {
  let r1 = (-b + Math.sqrt(delta)) / (2 * a);
  let r2 = (-b - Math.sqrt(delta)) / (2 * a);

  // Imprimindo resultados
  console.log(`R1 = ${r1.toFixed(5)}`);
  console.log(`R2 = ${r2.toFixed(5)}`);
} else {
  console.log('Impossivel calcular');
}