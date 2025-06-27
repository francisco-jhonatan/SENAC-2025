function Calculadora (){

    var a = parseFloat(prompt("Digite o primeiro valor:"))
    var b = parseFloat(prompt("Digite o segundo valor:"))
    var tipo = prompt("Informe o tipo de operação(+,-,*,/).")

    if(tipo === "+"){
        alert ("Soma = "+(a+b))
    }
    if(tipo === "-"){
        alert ("Subitração = "+(a-b))
    }
    if(tipo=== "*"){
        alert ("Mutiplicação = "+(a*b))
    }
    if(tipo=== "/"){
        alert ("Divisão = "+(a/b))
    }
}