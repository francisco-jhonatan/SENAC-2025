//document.writeln('Hello Word!')

var container = document.getElementById('container') //pegando div do html
var elemento = document.createElement('button') // criando um botão
elemento.textContent = 'Button' //define o conteúdo textual do elemento
elemento.style.backgroundColor = '#99ff99'
//elemento.style.backgroundColor = '#99ff99' // é possível estimatizar os elementos

elemento.id = 'btn' // adiciona um id ao elemento
elemento.className = 'btn' // define uma classe ao elemento,
// .classList também pode ser usado se for adicionar maiks de uma classe

function Acao(){
    alert("Ação")
}

container.appendChild(elemento) // adicina um elemento filho

texto = 'literal'
classe = 'btn'
container.innerHTML += `<button class="${classe}">${texto}</button>` // Literal de valores dinâmicos
container.innerHTML += `<button class="${classe}">${texto}</button>` // Literal 

var container = document.getElementById('container')

var pessoa = [
    {
        "nome": "Lena",
        "foto": "https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png",
        "post": "https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png",
        "descricao": "Lena"
    }, {
        "nome": "Neymar",
        "foto": "http://127.0.0.1:5500/front-end/images/neymar.jpg",
        "post": "http://127.0.0.1:5500/front-end/images/neymar.jpg",
        "descricao": "Neymar JN"
    }, {
        "nome": "Roberto Carlos",
        "foto": "http://127.0.0.1:5500/front-end/images/roberto-carlos.jpg",
        "post": "http://127.0.0.1:5500/front-end/images/roberto-carlos.jpg",
        "descricao": "Roberto Carlos"
    }, {
        "nome": "Silvio Santos",
        "foto": "http://127.0.0.1:5500/front-end/images/silvio-santos.jpg",
        "post": "http://127.0.0.1:5500/front-end/images/silvio-santos.jpg",
        "descricao": "Silvio Santos"
    }
]

for (let i = 0; i < pessoa.length; i++) {
    container.innerHTML += `
        <div class="card">
                <img class="img" src="${pessoa[i].post}"
                 width="300" heigth= "200"></img>

            <div class="linha">
                    <img class="avatar" src="${pessoa[i].foto}"
                     width="50" heigth= "50"></img>

                <p>${pessoa[i].descricao}</p>

            </div>
        </div>
 `
}





//a = 5
//a = a + 1 // 6
//a ++ // 7
//a += 1 // 8

//a = '5'
//a = a + 1 // 51
//a ++ // 511
//a += 1 // 5111