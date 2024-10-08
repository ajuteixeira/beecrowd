// BEE1066

// Entrada de valores
const input = require('fs').readFileSync('data/1066.txt', 'utf8');
const lines = input.split('\r\n');

// Declaração de variáveis
let num;
let n = lines.length;
let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;

// Construindo a estrutura de repetição
for (let i = 0; i < 5; i++) {
  num = Number(lines[i]);

  if (num % 2 === 0) {
    pares++;
  } else {
    impares++;
  }

  if (num > 0) {
    positivos++;
  } else if (num < 0) {
    negativos++;
  }
}

// Imprimindo resultados
console.log(`${pares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivos} valor(es) positivo(s)`);
console.log(`${negativos} valor(es) negativo(s)`);
