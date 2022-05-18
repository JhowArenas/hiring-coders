function principal():void{
    console.log("Executando")
}
principal()

// Never sáo para laço de função que nunca vai terminar, como o while, for, etc.
function funcaoQueNuncaRetorna():never{
    while(true){
        console.log("Executando")
    }
}