
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
flag = true
function CreateSquare(){
    if(document.querySelector('.square')!==null){
        document.querySelector('.square').remove()
    }
    let a = document.createElement('div')
    a.className = 'square'
    a.addEventListener('click', ()=>{
        CreateSquare()
    })
    if(flag){
        a.style.backgroundColor = "blue"
    } else{
        a.style.backgroundColor = "red"
    }
    flag = !flag
    container.appendChild(a)
}

CreateSquare()

alert(Math.random*100)