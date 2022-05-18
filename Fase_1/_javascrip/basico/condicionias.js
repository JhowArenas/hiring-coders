var nome = "JC";

if (nome == "JC") {
    console.log("Bem vindo " + nome);
} else if( nome == "Teste"){
    console.log("Bem vindo " + nome);
} else {
    console.log("Não é o nome certo");
}

// *****************************************************************************

var nome = "JC";

switch (nome) {
    case "JC":
        console.log("Bem vindo " + nome);
        break;
    case "Teste":
        console.log("Bem vindo " + nome);
        break;
    default:
        console.log("Não é o nome certo");
        break;
}