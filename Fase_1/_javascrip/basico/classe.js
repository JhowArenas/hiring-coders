class Matematica {
    soma(valorA, valorB) {
        return valorA + valorB;
    }
    subtracao(valorA, valorB) {
        return valorA - valorB;
    }
}

var instanciaMatematica = new Matematica();

resultado = instanciaMatematica.soma(4, 7);

console.log(resultado);