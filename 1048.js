// BEE1048

// Entrada de valores
const input = require('fs').readFileSync('data/1048.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis
let salario = parseFloat(lines[0]);
let novoSalario;
let reajuste;
let percentual;

// Construindo a estrutura condicional
if (salario >= 0 && salario <= 400) {
  percentual = 0.15;
} else if (salario > 400 && salario <= 800) {
  percentual = 0.12;
} else if (salario > 800 && salario <= 1200) {
  percentual = 0.1;
} else if (salario > 1200 && salario <= 2000) {
  percentual = 0.07;
} else if (salario > 2000) {
  percentual = 0.04;
}

// Calculando novo salário, reajuste e percentual
novoSalario = salario * (1 + percentual);
reajuste = novoSalario - salario;
percentual *= 100;

// Imprimindo resultados
console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
console.log(`Em percentual: ${percentual.toFixed(0)} %`);
