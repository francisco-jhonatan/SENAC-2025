var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n'); //lines é um array
//=====================================================

let a = parseInt(lines[0].split(" ")[0])
let b = parseInt(lines[0].split(" ")[1])
let c = parseInt(lines[0].split(" ")[2])

x = (a + b + Math.abs (a - b)) / 2
x = (x + c + Math.abs (x - c)) / 2

console.log(x+ " eh o maior")

