var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n'); //lines é um array
//=====================================================

var raio = parseFloat(input);
var area = 3.14159 * (raio * raio);
console.log("A=" + area.toFixed(4));
