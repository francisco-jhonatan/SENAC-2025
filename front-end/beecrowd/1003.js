var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n'); //lines é um array
//=====================================================

var A = parseInt(lines.shift())
var B = parseInt(lines.shift())

var SOMA = A + B;

console.log("SOMA = "+ SOMA)