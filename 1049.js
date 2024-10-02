// BEE1049

// Entrada de valores
const input = require('fs').readFileSync('data/1049.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis
let animal1 = lines[0];
let animal2 = lines[1];
let animal3 = lines[2];
let animal4;

// Construindo a estrutura condicional
if (animal1 == 'vertebrado' && animal2 == 'ave' && animal3 == 'carnivoro') {
  animal4 = 'aguia';
} else if (
  animal1 == 'vertebrado' &&
  animal2 == 'ave' &&
  animal3 == 'onivoro'
) {
  animal4 = 'pomba';
} else if (
  animal1 == 'vertebrado' &&
  animal2 == 'mamifero' &&
  animal3 == 'onivoro'
) {
  animal4 = 'homem';
} else if (
  animal1 == 'vertebrado' &&
  animal2 == 'mamifero' &&
  animal3 == 'herbivoro'
) {
  animal4 = 'vaca';
} else if (
  animal1 == 'invertebrado' &&
  animal2 == 'inseto' &&
  animal3 == 'hematofago'
) {
  animal4 = 'pulga';
} else if (
  animal1 == 'invertebrado' &&
  animal2 == 'inseto' &&
  animal3 == 'herbivoro'
) {
  animal4 = 'lagarta';
} else if (
  animal1 == 'invertebrado' &&
  animal2 == 'anelideo' &&
  animal3 == 'hematofago'
) {
  animal4 = 'sanguessuga';
} else if (
  animal1 == 'invertebrado' &&
  animal2 == 'anelideo' &&
  animal3 == 'onivoro'
) {
  animal4 = 'minhoca';
}

// Imprimindo resultados
console.log(animal4);
