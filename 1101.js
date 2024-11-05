// BEE1101

// Entrada de valores
const input = require('fs').readFileSync('data/1101.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis

// Definindo a estrutura de repetição
for (let i = 0; i <= lines.length; i++) {
  let line = lines[0].split(' ');
  let n = line[0];
  let m = line[1];

  let maior = n > m ? n : m;
  let menor = n < m ? n : m;

  for (let j = menor; j <= maior; j++) {
    let str = '';
    str = str + ' ';
    console.log(str);
  }
}

// Calculando os percentuais

// Imprimindo os resultados
