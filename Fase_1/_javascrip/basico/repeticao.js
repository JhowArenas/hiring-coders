var numeroSorteado = 10;

for(var i = 0; i < 100; i++){
    if(numeroDigitado == i){
        console.log("Seu numero foi encontrado!");
        break;
    }
}

// *****************************************************************************

var achou = false;  

var numeroSorteado = 10;
var possivelValor = 0;

while (!achou){
    possivelValor+=1;
    if(possivelValor == numeroSorteado){
        achou = true;
        console.log("Seu numero foi encontrado!");
    }else{
        console.log("Não foi encontrado!");
    }
}