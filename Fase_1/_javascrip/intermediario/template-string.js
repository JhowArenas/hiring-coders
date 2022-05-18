let meuNome = 'Jhow';
let meuSobrenome = 'Arenas';
let minhaProfissao = 'Desenvolvedor';

// Sem Template String
console.log(
    'Meu nome é ' + meuNome + ' ' + meuSobrenome + ' e minha profissão é ' + minhaProfissao
)
// Com Template String
console.log(
    `Meu nome é ${meuNome} ${meuSobrenome} e minha profissão é ${minhaProfissao}`
)

console.log(
    `O resultado da soma de 1 + 1 é ${1+1}`
)
console.log(
    `O objeto json é ${{chave: 'valor'}}`
)

let meuObjeto = {
    chave: 'Novo valor',
}