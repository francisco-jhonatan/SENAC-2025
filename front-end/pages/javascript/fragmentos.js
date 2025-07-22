
const container = document.getElementById('container')

// Use o "// #region" para delimitar áreas do cógigo,
//podendo ocultá-las ou mostrá-las quando quiser.

//#region TOPO

var topo = document.createDocumentFragment()

var containerTopo = document.createElement('div')
containerTopo.className = 'topo'

var logo = document.createElement('img')
logo.setAttribute('src', 'https://logodownload.org/wp-content/uploads/2014/10/senac-logo-0.png')
logo.setAttribute('alt', 'Logo')
logo.setAttribute('width', '70')
logo.setAttribute('height', '70')

var nav = document.createElement('nav')
var sobre = document.createElement('a')
sobre.setAttribute('href', '#')
sobre.textContent = "Sobre"

var servicos = document.createElement('a')
servicos.setAttribute('href', '#')
servicos.textContent = 'Serviços'

var login = document.createElement('a')
login.setAttribute('href', '#')
login.textContent = 'Login'

nav.append(sobre,servicos,login)
containerTopo.append(logo, nav)
topo.appendChild(containerTopo)
container.appendChild(topo)

// #endregion

// #region MAIN


var main = document.createDocumentFragment()

var containerMain = document.createElement('div')
containerMain.className = 'main'

var nav = document.createElement('nav')
var texto

main.appendChild(containerMain)
container.appendChild(main)
// #endregion