//BE1013

const input = require("fs").readFileSync("data/1013.txt", "utf8");
const lines = input.split("\r\n");

// declarando variáveis
let line = lines[0].split(" ");
let a = parseInt(line[0]);
let b = parseInt(line[1]);
let c = parseInt(line[2]);

// calculando o maior entre os três valores
let maior = (a, b) => (a + b + Math.abs(a - b)) / 2; // Math.abs retorna o valor absoluto

let resposta = maior(a, maior(b, c));

console.log(`${resposta} eh o maior`);