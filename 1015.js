//BEE1015

const input = require('fs').readFileSync('data/1015.txt', 'utf8');
const lines = input.split('\r\n');

// declarando as variáveis do p1
let plano1 = lines[0].split(' ');
let x1 = parseFloat(plano1[0]);
let y1 = parseFloat(plano1[1]);

// declarando as variáveis do p2
let plano2 = lines[1].split(' ');
let x2 = parseFloat(plano2[0]);
let y2 = parseFloat(plano2[1]);

// calculando a distância entre os dois pontos
let distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

// imprimindo os resultados
console.log(distancia.toFixed(4));