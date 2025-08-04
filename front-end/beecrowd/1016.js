var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n'); //lines é um array
//=====================================================

let distancia = parseInt(lines[0])

let tempo = distancia * 2

console.log(tempo + " minutos")