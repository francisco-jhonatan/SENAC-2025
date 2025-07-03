// JSON - JavaScript Object Notation

var pessoa = { // JSON -> estrutura de dados para representar um objeto
    "nome": "Lena",
    "foto": "http://...",
    "post": "http://...",
    "descricao": "text"
}

console.log(pessoa.nome) // Para acessar atributos do objeto,
//  ultiliza-se o operador '.' seguido da chave. Ex: 'pessoa.nome',
// onde 'pessoa' é o objeto e 'nome' é o atributo.

pessoa.nome = "Luana" // Para editar o atributo de um objeto,
// acessamos o atributo e utilizamos o operador de atribuição '=' 
// para definir o novo valor.

var produto = {
    "nome": "celular01",
    "id": 0,
    "descricao": "descrição",
    "preco": "100.00"
}

var produtos = // Lista de produtos
    [
        {
            "nome": "celular 01",
            "id": 0,
            "descricao": "descrição",
            "preco": "100.00"
        },
        {
            "nome": "celular 02",
            "id": 1,
            "descricao": "descrição",
            "preco": "200.00"
        },
        {
            "nome": "celular 03",
            "id": 2,
            "descricao": "descrição",
            "preco": "300.00"
        },
        {
            "nome": "celular 04",
            "id": 3,
            "descricao": "descrição",
            "preco": "400.00"
        }
    ]
    console.log(produtos[2]) // Para acessar um item da lista
    // utilizamos o index(lista[x])
    var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

