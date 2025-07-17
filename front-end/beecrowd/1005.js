var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n'); //lines é um array
//=====================================================

var A = parseFloat(lines.shift())
var B = parseFloat(lines.shift())

var MEDIA = (A * 3.5) + (B * 7.5) / 11

console.log("MEDIA = "+ MEDIA.toFixed(5))