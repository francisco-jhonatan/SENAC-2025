
function Stringg(){

var text = 'O rato roeu a roupa do rei de roma'
var palavras = text.split('')
for(let i = 0; i< palavras.length; i++){
  //  alert(palavras[i])
  if("rato" === palavras[i]){
    palavras[i] = 'cachorro'
  }
}
//alert(palavras.join(' ').replace('roma', 'grécia'))

// Faça um script que conte quantas vezes a 
// letra 'o' (minúscula) aparece na frase.

var soma = 0
for(let i = 0; i < palavras.length; i++) {
    if("o" === palavras[i]){
        soma++
    }
}
alert(soma)
alert(text)
}