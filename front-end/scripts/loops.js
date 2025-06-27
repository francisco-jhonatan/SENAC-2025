function Loops() {
    var n = parseInt(prompt())
    // O for é um laço(loop) de repetição que é usado
    // quando se sabe a quantidade de interações a serem executadas.
    for (let i = 0; i <= n; i++) {
        alert("For " + i)
    }

    // O laço while vai executar uma ação enquanto uma condição for atendida.
    var flag = true
    while (flag) {
        alert("1° While" + n)
        n--
        if (n === 0) {
            flag = false
        }
    }


    while (n !== 0) { // Sem flag.
        alert("2° While" + n)
        n--
    }
}
