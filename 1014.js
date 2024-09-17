//BEE1014

const input = require('fs').readFileSync('data/1014.txt', 'utf8');
const lines = input.split('\r\n');

//definindo variáveis
let distancia = parseInt(lines[0]);
let combustivel = parseFloat(lines[1]);

// calculando o consumo médio
let consumo = distancia / combustivel;

// exibindo resultados
console.log(`${consumo.toFixed(3)} km/l`);