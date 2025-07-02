//document.writeln('Hello Word!')

var container = document.getElementById('container') //pegando div do html
var elemento = document.createElement('button') // criando um botão
elemento.textContent = 'Button' //define o conteúdo textual do elemento
elemento.style.backgroundColor = '#99ff99'
//elemento.style.backgroundColor = '#99ff99' // é possível estimatizar os elementos

elemento.id = 'btn' // adiciona um id ao elemento
elemento.className = 'btn' // define uma classe ao elemento,
// .classList também pode ser usado se for adicionar maiks de uma classe

container.appendChild(elemento) // adicina um elemento filho

texto = 'literal'
classe = 'btn'
container.innerHTML += `<button class="${classe}">${texto}</button>` // Literal de valores dinâmicos
container.innerHTML += `<button class="${classe}">${texto}</button>` // Literal 

//a = 5
//a = a + 1 // 6
//a ++ // 7
//a += 1 // 8

//a = '5'
//a = a + 1 // 51
//a ++ // 511
//a += 1 // 5111