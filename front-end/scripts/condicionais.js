function Condicionais() { 

var n = parseInt(prompt("Forneça um número inteiro."))

if (n % 2 === 0) { // O operador '%' calcula o resto da divisão do
    //  número à esquerda pelo número a direita.
    alert("n é par!")
} else { // else significa senão.
    alert("n é impar!")
}

// Verifique se 'n' é múltiplo de 5 e maior que 10.

if (n % 5 === 0 && n > 10) { // && significa 'e' ou 'end' 
    // e o if só executa a ação se ambas as expressões forem verdadeiras
    alert("É múltiplo de 5 e maior que 10.")
}

// Verifique se "n" é múltiplo de 3 e menor que 10.

if (n % 3 === 0 || n < 10) { // || significa 'ou' ou 'or', o if vai executar
    // se uma das condições for verdadeira.
    alert("n é mútiplo de 3 e menor que 10.")
}

switch (n) { // O switch significa 'escolha' e ele funciona como  'if' aninhados.
    // Caso a váriavel escolhida seja igual a um valor determinado, ele executa 
    // a ação e o 'break' interrompe o switch.
    case 1: alert(1)
        break
    case 2: alert(2)
        break
    case 3: alert(3)
        break
    case 4: alert(4)
        break
}

}