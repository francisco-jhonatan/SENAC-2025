var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n'); //lines é um array
//=====================================================

let numero = parseInt(lines.shift())
let hrsTrabalhadas = parseInt(lines.shift())
let valorPorHora = parseFloat(lines.shift())

let salario = hrsTrabalhadas * valorPorHora

console.log("NUMBER = "+numero)
console.log("SALARY = U$ "+salario.toFixed(2))