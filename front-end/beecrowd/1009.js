var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n'); //lines é um array
//=====================================================

let nome = lines.shift()
let salarioFixo = parseFloat(lines.shift())
let totalDeVendas = parseFloat(lines.shift())

let comissao = totalDeVendas * 0.15
let salarioTotal = salarioFixo + comissao;

console.log("TOTAL = R$ "+ salarioTotal.toFixed(2))