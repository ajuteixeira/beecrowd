// BEE1008

// Entrada de valores
const input = require('fs').readFileSync('data/1008.txt', 'utf8');
const lines = input.split('\r\n');

// Declaração de variáveis
let numeroFun = parseInt(lines[0]);
let horasTrab = parseInt(lines[1]);
let valorHora = parseFloat(lines[2]);

// Calculando o salário
let salario = horasTrab * valorHora;

// Saída de resultados
console.log(`NUMBER = ${numeroFun}\nSALARY = U$ ${salario.toFixed(2)}`)