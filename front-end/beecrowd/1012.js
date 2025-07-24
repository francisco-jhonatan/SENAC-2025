var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n'); //lines é um array
//=====================================================

let A = parseFloat(lines[0].split(" ")[0])
let B = parseFloat(lines[0].split(" ")[1])
let C = parseFloat(lines[0].split(" ")[2])

pi = 3.14159

let areaTriangulo = (A * C) / 2
let areaCirculo = 3.14159 * C**2
let areaTrapezio = ((A + B) * C) / 2
let areaQuadrado = B * B
let areaRetangulo = A * B


console.log("TRIANGULO: "+ areaTriangulo.toFixed(3))
console.log("CIRCULO: "+ areaCirculo.toFixed(3))
console.log("TRAPEZIO: "+ areaTrapezio.toFixed(3))
console.log("QUADRADO: "+ areaQuadrado.toFixed(3))
console.log("RETANGULO: "+ areaRetangulo.toFixed(3))