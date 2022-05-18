const pessoa = {
  nome: "Ana",
  sobrenome: "Silva",
  idade: 20,
  profissao: "Desenvolvedora",
};

// Sem Desestruct
// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;
// let profissao = pessoa.profissao;

// Desestruct
let { nome, sobrenome, idade, profissao } = pessoa;