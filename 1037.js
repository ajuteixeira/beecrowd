// BEE1037

// Entrada de valores
const input = require('fs').readFileSync('data/1037.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis
let valor = parseFloat(lines[0]);

// Construindo a estrutura condicional
if (valor >= 0 && valor <= 25) {
  console.log('Intervalo [0,25]');
} else if (valor > 25 && valor <= 50) {
  console.log('Intervalo (25,50]');
} else if (valor > 50 && valor <= 75) {
  console.log('Intervalo (50,75]');
} else if (valor > 75 && valor <= 100) {
  console.log('Intervalo (75,100]');
} else {
  console.log('Fora de intervalo');
}