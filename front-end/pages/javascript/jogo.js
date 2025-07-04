
let square = document.createElement('div')
square.className = 'square'

document.body.appendChild(square)

square.addEventListener('click', () => {
    let a = square
    a.style.backgroundColor = "black"
    document.body.appendChild(a)
})