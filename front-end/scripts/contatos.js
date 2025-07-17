
function Contatos() {

    var contatos = [{
        "nome": "Eurisvan",
        "telefone": "779879789",
        "email": "Eurisvan@gmail.com",
        "endereço": "rua chico velho"
    },
    {
        "nome": "Almeida",
        "telefone": "12324324",
        "email": "Almeida@gmail.com",
        "endereço": "rua beco sem saída"
    },
    {
        "nome": "Carlin",
        "telefone": "34323432",
        "email": "Carlin@gmail.com",
        "endereço": "rua beija flor"
    },
    {
        "nome": "Luiz",
        "telefone": "46567657",
        "email": "Luiz@gmail.com",
        "endereço": "rua sai de baixo"
    }]

    // var nomeBusca = prompt("Digite o nome do contato:");

    // var contatoEncontrado = contatos.find(contato => contato.nome.toLocaleLowerCase() === nomeBusca.toLocaleLowerCase());

    // if (contatoEncontrado) {
    //     alert(
    //         `contatoEncontrado:\n` +
    //         `nome: ${contatoEncontrado.nome}\n` +
    //         `telefone: ${contatoEncontrado.telefone}\n` +
    //         `email: ${contatoEncontrado.email}\n` +
    //         `endereço: ${contatoEncontrado.endereço}`

    //     );

    // } else {
    //     alert("Contato não registrado!");
    // }

    // Outra forma de fazer:

    var nome = prompt("Digite o nome do contato:")
    var flag = false
    for (let i = 0; i < contatos.length; i++) {
        if (nome === contatos[i].nome) {
            alert("Contato encontrado: \n" +
                contatos[i].nome + "\n" +
                contatos[i].telefone + "\n" +
                contatos[i].email + "\n" +
                contatos[i].endereço
            )
            flag = true
            break;
        }
    }

    if (!flag) {
        alert("Contato não registrado!")
    }

}
