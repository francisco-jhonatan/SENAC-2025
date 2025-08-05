var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n'); //lines é um array
//=====================================================

var valor = parseInt(lines[0])

var cem = Math.floor(valor / 100) //576
valor = valor % 100 //76

var cinquenta = Math.floor(valor / 50)
valor = valor % 50 //26

var vinte = Math.floor(valor / 20)
valor = valor % 20 //6

var dez = Math.floor(valor / 10)
valor = valor % 10 //6

var cinco = Math.floor(valor / 5)
valor = valor % 5 //1

var dois = Math.floor(valor / 2)
valor = valor % 2 //1

var um = Math.floor(valor / 1)

console.log(parseInt(lines[0]))//576
console.log(cem + ' nota(s) de R$ 100,00')//5
console.log(cinquenta + ' nota(s) de R$ 50,00')//1
console.log(vinte + ' nota(s) de R$ 20,00')//1
console.log(dez + ' nota(s) de R$ 10,00')//0
console.log(cinco + ' nota(s) de R$ 5,00')//1
console.log(dois + ' nota(s) de R$ 2,00')//0
console.log(um + ' nota(s) de R$ 1,00')//1