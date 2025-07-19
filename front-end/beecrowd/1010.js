var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n'); //lines é um array
//=====================================================

//12 1 5.30

let totaValorl1 = lines.shift().split(" ")
let totaValorl2 = lines.shift().split(" ")

//12, 1, 5.30

let codigo1 = totaValorl1.shift()
let numemo1 = totaValorl1.shift()
let valor1 = totaValorl1.shift()
let valorTotal1 = numemo1 * valor1

let codigo2 = totaValorl2.shift()
let numemo2 = totaValorl2.shift()
let valor2 = totaValorl2.shift()
let valorTotal2 = numemo2 * valor2


let valorPagar = valorTotal1 + valorTotal2

console.log("VALOR A PAGAR: R$ "+ valorPagar.toFixed(2))