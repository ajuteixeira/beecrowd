// BEE1035

// Entrada de valores
var input = require('fs').readFileSync('data/1035.txt', 'utf8');
var lines = input.split('\r\n');

let line = lines[0].split(' ')
// Declarando variáveis
let a = parseInt(line[0]);
let b = parseInt(line[1]);
let c = parseInt(line[2]);
let d = parseInt(line[3]);

// Construindo a estrutura condicional
if (b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 == 0) {
  console.log('Valores aceitos');
} else {
  console.log('Valores nao aceitos');
}