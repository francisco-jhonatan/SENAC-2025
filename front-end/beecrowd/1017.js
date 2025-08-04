var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n'); //lines é um array
//=====================================================

let tempoGasto = parseInt(lines.shift())
let velocidadeMedia = parseInt(lines.shift())
let kml = 12

let distanciaPercorrida = tempoGasto * velocidadeMedia

let litros = distanciaPercorrida / kml

console.log(`${litros.toFixed(3)}`)