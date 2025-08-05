var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n'); //lines é um array
//=====================================================

let idade = parseInt(lines[0])

let ano = Math.floor(idade / 365)
idade = idade % 365

let mes = Math.floor(idade / 30)
idade = idade % 30 

let dia = Math.floor(idade / 1)
idade = idade % 1

console.log(ano + ' ano(s)')
console.log(mes + ' mes(es)')
console.log(dia + ' dia(s)')