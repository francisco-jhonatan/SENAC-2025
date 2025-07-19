
// São os quatro pilares fundamentais
// que sustentam o paradigma:
// 1 abstração
// 2 encapsulação
// 3 Herança
// 4 Polimorfismo


// Classe pai: Pessoa            
// Classe Filha: Servidor                             
// Classe Filha: Professor                                                   
// Classe Filha: Aluno                                                  


class Pessoa {
    constructor(nome, idade, genero, nacionalidade) {
        this.idade = idade;
        this.nome = nome;
        this.genero = genero;
        this.nacionalidade = nacionalidade;

    }
    exibirDetalhes() {
        return `
        Nome: ${this.nome},
        Idade: ${this.idade},
        Gênero: ${this.genero}, 
        Nacionalidade: ${this.nacionalidade}`;
    }
}

class Servidor extends Pessoa {
    constructor(nome, idade, genero, nacionalidade, cargo) {
        super(nome, idade, genero, nacionalidade);
        this.cargo = cargo;
    }
    exibirDetalhes() {
        return `
        ${super.exibirDetalhes()}, 
        Cargo: ${this.cargo}`;
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, genero, nacionalidade, salario) {
        super(nome, idade, genero, nacionalidade);
        this.salario = salario;
    }
    exibirDetalhes() {
        return `
        ${super.exibirDetalhes()},
        Salário: ${this.salario}`;
    }
}

class Aluno extends Pessoa {
    constructor(nome, idade, genero, nacionalidade, escolaridade) {
        super(nome, idade, genero, nacionalidade);
        this.escolaridade = escolaridade;
    }
    exibirDetalhes() {
        return `
        ${super.exibirDetalhes()}, 
        Escolaridade: ${this.escolaridade}`;
    }
}

function Poo() {

    const servidor1 = new Servidor("João", "20", "Masculino", "Brasileiro", "Diretor");
    const professor1 = new Professor("José", "23", "Masculino", "Brasileiro", 2500.00);
    const aluno1 = new Aluno("Henrique", "17", "Masculino", "Brasileiro", "Cursando o Ensino Médio");

    alert(servidor1.exibirDetalhes());
    alert(professor1.exibirDetalhes());
    alert(aluno1.exibirDetalhes());
}
