var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n'); //lines é um array
//=====================================================

var v1 = parseInt(lines.shift())
var v2 = parseInt(lines.shift())

var PROD = v1 * v2;

console.log("PROD = "+ PROD)