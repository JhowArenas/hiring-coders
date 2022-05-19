// Type assertions
type JogoAssertion = {
    nome: string;
    descricao: string;
}

// let jogo = {} as JogoAssertion;
let jogo = <JogoAssertion>{};
jogo.nome = `Ghost of Tsushima`;
jogo.descricao = `Um jogo que nunca joguei`;