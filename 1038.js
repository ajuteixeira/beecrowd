// BEE1038

// Entrada de valores
const input = require('fs').readFileSync('data/1038.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis
let line = lines[0].split(' ');
let codigo = parseInt(line[0]);
let quantidade = parseInt(line[1]);
let valor;

// Construindo a estrutura condicional
if (codigo === 1) {
  valor = quantidade * 4.0;
} else if (codigo === 2) {
  valor = quantidade * 4.5;
} else if (codigo === 3) {
  valor = quantidade * 5.0;
} else if (codigo === 4) {
  valor = quantidade * 2.0;
} else if (codigo === 5) {
  valor = quantidade * 1.5;
}

// Imprimindo resultados
console.log(`Total: R$ ${valor.toFixed(2)}`)
