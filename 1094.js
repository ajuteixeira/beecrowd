// BEE1094

// Entrada de valores
const input = require('fs').readFileSync('data/1094.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis
let limite = parseInt(lines[0]);

let total = 0;
let coelho = 0;
let rato = 0;
let sapo = 0;

// Definindo a estrutura de repetição
for (let i = 1; i <= limite; i++) {
  let exp = lines[i].split(' ');
  let tipo = exp[1];
  let qtd = parseInt(exp[0]);

  total += qtd;

  if (tipo == 'C') {
    coelho += qtd;
  } else if (tipo == 'R') {
    rato += qtd;
  } else if (tipo == 'S') {
    sapo += qtd;
  }
}

// Calculando os percentuais
let perCoelho = (coelho / total) * 100;
let perRato = (rato / total) * 100;
let perSapo = (sapo / total) * 100;

// Imprimindo os resultados
console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${coelho}`);
console.log(`Total de ratos: ${rato}`);
console.log(`Total de sapos: ${sapo}`);
console.log(`Percentual de coelhos: ${perCoelho.toFixed(2)} %`);
console.log(`Percentual de ratos: ${perRato.toFixed(2)} %`);
console.log(`Percentual de sapos: ${perSapo.toFixed(2)} %`);
