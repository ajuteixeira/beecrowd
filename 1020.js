//BEE1020

const input = require('fs').readFileSync('data/1020.txt', 'utf8');
const lines = input.split('\n');

// declarando as variáveis
let idadeDias = parseInt(lines[0]);

// calculando
let idadeAnos = Math.floor(idadeDias / 365);
idadeDias = idadeDias % 365;

let idadeMeses = Math.floor(idadeDias / 30);
idadeDias = idadeDias % 30;

// exibindo resultados
console.log(`${idadeAnos} ano(s)`);
console.log(`${idadeMeses} mes(es)`);
console.log(`${idadeDias} dia(s)`)