//BEE1017

const input = require('fs').readFileSync('data/1017.txt', 'utf8');
const lines = input.split('\n');

//definindo variáveis
let tempo = parseInt(lines[0]);
let velMedia = parseInt(lines[1]);

// calculando a distância
let distancia = tempo * velMedia;

// calculando a quantidade de litros para a distância
let totLitros = distancia / 12;

// exibindo resultados
console.log(totLitros.toFixed(3));