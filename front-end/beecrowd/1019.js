var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n'); //lines é um array
//=====================================================

let tempoSegundos = parseInt(lines[0])

let horas = Math.floor(tempoSegundos / 3600)
tempoSegundos = tempoSegundos % 3600

let minutos = Math.floor(tempoSegundos / 60)
tempoSegundos = tempoSegundos % 60

let segundo = Math.floor(tempoSegundos / 1)
tempoSegundos = tempoSegundos % 1


console.log(horas + ":" + minutos + ":" + segundo )
