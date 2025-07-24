var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n'); //lines é um array
//=====================================================

let x = parseInt(lines[0])
let y = parseFloat(lines[1])

let consumoMedio = x / y

console.log(consumoMedio.toFixed(3)+ " km/l")