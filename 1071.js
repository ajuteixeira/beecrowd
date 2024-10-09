// BEE1071

// Entrada de valores
const input = require('fs').readFileSync('data/1071.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis
let x = parseInt(lines[0]);
let y = parseInt(lines[1]);

let maior = x > y ? x : y;
let menor = x < y ? x : y;

let soma = 0;

// Construindo a estrutura de repetição
for (let num = menor + 1; num < maior; num++) {
  if (num % 2 !== 0) {
    soma += num;
  }
}

//Imprimindo o resultado
console.log(soma);
