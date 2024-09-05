// BEE1012

// Entrada de valores
const input = require('fs').readFileSync('data/1012.txt', 'utf8');
const lines = input.split('\r\n');

// Calculos
let areaTri = (a * c) / 2;
let areaCirc = PI * (c ** 2);
let areaTrap = ((a + b) * c) / 2;
let areaQuad = b ** 2;
let areaRet = a * b;

// Saída de resultados
console.log(`TRIANGULO: ${areaTri.toFixed(3)}\nCIRCULO: ${areaCirc.toFixed(3)}\nTRAPEZIO: ${areaTrap.toFixed(3)}\nQUADRADO: ${areaQuad.toFixed(3)}\nRETANGULO: ${areaRet.toFixed(3)}`)