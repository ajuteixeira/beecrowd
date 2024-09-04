// BEE1009

// Entrada de valores
const input = require("fs").readFileSync("data/1009.txt", "utf8");
const lines = input.split("\r\n");

// Declaração de variáveis
let salFixo = parseFloat(lines[1]);
let totVendas = parseFloat(lines[2]);

// Calculando o valor total a receber
let totReceber = salFixo + (totVendas * 0.15);

// Saída de resultados
console.log(`TOTAL = R$ ${totReceber.toFixed(2)}`);
