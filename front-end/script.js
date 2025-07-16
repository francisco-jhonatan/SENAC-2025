//alert("Hello Word!") //Exibe imagem um uma pop-up(alerta)

//alert(15+33)//soma simples

//var a = 55
//var b = 113
//alert(a+b) //operações básicas (=,-,*,/)

//var n = prompt("Forneça um número.") // Recebe valor digitado pelo usuário
//var numero = parseInt(n) // Converte string para inteiro(vide também parse)
//alert(numero + 10)

//var, let e const
//var a = 1; // Variável de escopo global
//let b = 2; // Escopo local, não pode ser acessada fora do espoco
//const c = 3; // Imultável, pode ser lida, mas não pode ser reescrita
//{
// alert (b); // ReferenceError
// let b = 5;
//alert(b); // 5
//}
//alert(c); // 2

// Boolean

//var boo = false
//alert(2<5) // O operador de igualdade ===; outros operadores: <,>,<=,>=.

var a = 10
let b = 20
const c = 30

//alert(a + " " + b + " " + c)

{
   var a = 1
   let b = 2
   var d = 5
  // alert(a + " " + b + " " + c)
}

//alert(a + " " + b + " " + c)

//alert(d)

//var bul = 36 <= 35 && 20 < 30
//alert(bul)

//if(a===b){
 //  alert('verdadeiro')
//} else {
 //  alert("Falso")
//}

var vetor = [1,2,3,4,5,6,7,8,9,10]
 //          0|1|2|3|4|5|6|7|8|9
//alert(vetor[vetor.length-1])

vetor.push(11)  //adiciona item no fim do array
vetor.pop()     //remove último valor do array
vetor.unshift(0)//adiciona no início do array
vetor.shift()   //remove o primeiro item do array

for(let i = 0;i < vetor.length;i++){
   alert(vetor[i])
}