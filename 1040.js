// BEE1040

// Entrada de valores
const input = require('fs').readFileSync('data/1040.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis
let line = lines[0].split(' ');
let n1 = parseFloat(line[0]);
let n2 = parseFloat(line[1]);
let n3 = parseFloat(line[2]);
let n4 = parseFloat(line[3]);

// Calculando a média ponderada
let media = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / (2 + 3 + 4 + 1);
console.log(`Media: ${media.toFixed(1)}`);

// Construindo a estrutura condicional
if (media >= 7) {
  console.log('Aluno aprovado.');
} else if (media < 5.0) {
  console.log('Aluno reprovado.');
} else if (media >= 5.0 && media <= 6.9) {
  console.log('Aluno em exame.');

  // Imprimindo a nota do exame
  let exame = parseFloat(lines[1]);
  console.log(`Nota do exame: ${exame.toFixed(1)}`);

  // Calculando a média final
  let mediaFinal = (media + exame) / 2;

  // Avaliando a média final
  if (mediaFinal >= 5.0) {
    console.log('Aluno aprovado.');
  } else {
    console.log('Aluno reprovado.');
  }

  // Imprimindo a média final
  console.log(`Media final: ${mediaFinal.toFixed(1)}`);
}