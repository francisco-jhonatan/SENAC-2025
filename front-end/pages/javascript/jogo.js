
/*var container = document.getElementById('container')

let square = document.createElement('div')
square.className = 'square'

container.appendChild(square)

square.addEventListener('click', ()=>{
    let a = document.createElement('div')
    a.className = 'square'
    a.style.backgroundColor = "black"
    container.appendChild(a)
    })*/


var container = document.getElementById('container')
var gameContainer = document.createElement('div')
gameContainer.className = 'game-container'

container.appendChild(gameContainer)

for(let i = 0; i < 25; i++){
    let cell = document.createElement('div')
    cell.className = 'cell'
    gameContainer.appendChild(cell)
}


function CreateSquare(){
    if(document.querySelector('.square')!==null){
        document.querySelector('.square').remove()
    }
    let a = document.createElement('div')
    a.className = 'square'
    a.addEventListener('click', ()=>{
        CreateSquare()
    })

    let red = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    let white = Math.floor(Math.random()*256)
    a.style.backgroundColor = 'rgb( '+red+','+blue+','+white+')'

    var cells = document.querySelectorAll('.cell')
    var randomIndex = Math.floor(Math.random()*25)
    let randomCell = cells[randomIndex]


    randomCell.appendChild(a)
}

CreateSquare()
