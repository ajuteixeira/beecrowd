//BEE1012

let input = require('fs').readFileSync('data/1012.txt', 'utf-8');
let lines = input.split('\r\n');

// declarando variaveis
const PI = 3.14159;
let line = lines[0].split(' ');
let A = parseFloat(line[0]);
let B = parseFloat(line[1]);
let C = parseFloat(line[2]);

// calculando áreas
let triRet = A * C / 2;
let circ = PI * C ** 2;
let trap = (A + B) * C / 2;
let quadr = B ** 2;
let ret = A * B;

// exibindo resultados
console.log(`TRIANGULO: ${triRet.toFixed(3)}\nCIRCULO: ${circ.toFixed(3)}\nTRAPEZIO: ${trap.toFixed(3)}\nQUADRADO: ${quadr.toFixed(3)}\nRETANGULO: ${ret.toFixed(3)}`)