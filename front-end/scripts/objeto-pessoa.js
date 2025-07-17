// Classe pai: Pessoa
// Classe Filha: Servidor
// Classe Filha: Professor
// Classe Filha: Aluno

class Pessoa {
  constructor(nome, idade, genero, nacionalidade ) {
    this.idade = idade;
    this.nome = nome;
    this.genero = genero;
    this.nacionalidade = nacionalidade;

  }
  exibirDetalhes() {
    return `Nome: ${this.nome}, Idade: ${this.idade}, Gênero: ${this.genero}, Nacionalidade: ${this.nacionalidade}`;
  }
}

class Servidor extends Pessoa{
    constructor(nome, idade, genero, nacionalidade, cargo){
        super(nome, idade, genero, nacionalidade);
        this.cargo = cargo;
    }
    exibirDetalhes() {
    return `${super.exibirDetalhes()}, Cargo: ${this.cargo}`;
  }
}

class Professor extends Pessoa{
    constructor(nome, idade, genero, nacionalidade, ){
        super(nome, idade, genero, nacionalidade);
        this.cargo = cargo;
    }
}