function Funcoes() {

    function Comum() {
        alert("Função comum!")
    }

    Comum()

    function ComumComParametro(parametro) {
        alert("Função com parâmetro: " + parametro)
    }

    ComumComParametro("Parâmetro");

    ()=>{
        alert("Função de seta ou Lambda")
    }

    (function(){
        alert("Função anônima.")
    })

}




class Produto {
  constructor(id, nome, preco) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }

  exibirDetalhes() {
    return `ID: ${this.id}, Nome: ${this.nome}, Preço: R$${this.preco.toFixed(2)}`;
  }
}

class Livro extends Produto {
  constructor(id, nome, preco, autor, isbn) {
    super(id, nome, preco);
    this.autor = autor;
    this.isbn = isbn;
  }

  exibirDetalhes() {
    return `${super.exibirDetalhes()}, Autor: ${this.autor}, ISBN: ${this.isbn}`;
  }
}

class Eletronico extends Produto {
  constructor(id, nome, preco, marca, garantiaMeses) {
    super(id, nome, preco);
    this.marca = marca;
    this.garantiaMeses = garantiaMeses;
  }

  exibirDetalhes() {
    return `${super.exibirDetalhes()}, Marca: ${this.marca}, Garantia: ${this.garantiaMeses} meses`;
  }
}

// Criando instâncias dos produtos
const livro1 = new Livro(1, "Dom Casmurro", 35.50, "Machado de Assis", "978-85-8080-001-0");
const eletronico1 = new Eletronico(2, "Smartphone X", 2500.00, "TechCorp", 12);

// Exibindo detalhes (polimorfismo em ação!)
console.log(livro1.exibirDetalhes());
console.log(eletronico1.exibirDetalhes());