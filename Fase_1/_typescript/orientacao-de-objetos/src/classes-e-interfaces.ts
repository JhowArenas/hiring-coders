// Metodos

// Static
class _Usuario {
    public nome;
    public idade;
    
    constructor(nome:string, idade:number) {
        this.nome = nome;
        this.idade = idade;
    }
}

class _Player extends _Usuario {
    public game;
    
    constructor(nome:string, idade:number, game:string) {
        super(nome, idade);
        this.game = game;
    }

    dizerOJogoAtual() {
        return `O jogo atual é ${this.game}`;
    }

    static queHorasSao() {
        return new Date();
    }
}

const jogador = new _Player('Jhow', 20, 'Overwatch');
// console.log(jogador.dizerOJogoAtual());
// console.log(_Player.queHorasSao());

// Private, protected e public
class _Jogo {
    // private nome; // cprivate: é acessivel apenas dentro da classe que o atributo foi criado
    protected nome; // prostected: é acessivel dentro da classe e por classes que herdam
    // public nome; // public: é acessivel de forma geral, dentro e fora da classe
    
    constructor(nome:string) {
        this.nome = nome;
    }

    dizerNome() {
        return `O nome do jogo é ${this.nome}`;
    }
}
// class _JogoComDescricao extends _Jogo {
//     private descricao;
    
//     constructor(nome:string, descricao:string) {
//         super(nome);
//         this.descricao = descricao;
//     }

//     dizerDescricao() {
//         return `A descrição do jogo é ${this.descricao}, e o nome do jogo é ${this.nome}`;
//     }
// }

// const ghost = new _JogoComDescricao('Ghost of Tsushima', 'Um jogo que nunca joguei');
// console.log(ghost.dizerNome());


// Interfaces

interface IJogoComDescricao {
    // nome: string;
    descricao: string;
    dizerDescricao(): string;
}
//implements
class _JogoComDescricao extends _Jogo implements IJogoComDescricao{
    public descricao;
    
    constructor(nome:string, descricao:string) {
        super(nome);
        this.descricao = descricao;
    }

    dizerDescricao() {
        return `A descrição do jogo é ${this.descricao}, e o nome do jogo é ${this.nome}`;
    }
}

// type alias
type TJogoComDescricao = {
    descricao: string;
    dizerNomeComDescricao(): string;
}

const obj: TJogoComDescricao = {
    descricao: 'Um jogo que nunca joguei',
    dizerNomeComDescricao(): string {
        return `123`;
    }
}
