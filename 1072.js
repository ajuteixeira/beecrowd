// BEE1072

// Entrada de valores
const input = require('fs').readFileSync('data/1072.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis
let limite = parseInt(lines[0]);
let num;
let dentro = 0;
let fora = 0;

// Construindo a estrutura de repetição
for (let i = 0; i < limite; i++) {
  num = parseInt(lines[i]);

  if (num >= 10 && num <= 20) {
    dentro++;
  } else {
    fora++;
  }
}

//Imprimindo o resultado
console.log(`${dentro} in`);
console.log(`${fora} out`);
