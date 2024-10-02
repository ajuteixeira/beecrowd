// BEE1044

// Entrada de valores
const input = require('fs').readFileSync('data/1044.txt', 'utf8');
const lines = input.split(' ');

// Declarando variáveis
let A = parseInt(lines[0]);
let B = parseInt(lines[1]);
let resto;

// Construindo a estrutura condicional
if (A > B) {
  resto = A % B;
  if (resto == 0) {
    console.log('Sao Multiplos');
  } else {
    console.log('Nao sao Multiplos');
  }
} else {
  resto = B % A;
  if (resto == 0) {
    console.log('Sao Multiplos');
  } else {
    console.log('Nao sao Multiplos');
  }
}
