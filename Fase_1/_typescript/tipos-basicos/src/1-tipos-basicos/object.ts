// Neste caso o objeto fica travado a receber apenas os dados do type que foi definido.
type Pessoa = {
    name: string;
    lastName: string;
}
let pessoaComType: Pessoa = {
    name: 'Jhow',
    lastName: 'Arenas'
}
// let pessoaComType2: Pessoa = {
//     name: 'Jhow',
//     lastName: 'Arenas',
//     age: 30 // da erro porque está fora do type
// }


// Com o object fica um aberto para receber qualquer tipo de dado
let pessoa: object = {
    name: 'Jhow',
    lastName: 'Arenas',
    age: 30 // da erro porque o object aceita qualquer tipo de dado
}