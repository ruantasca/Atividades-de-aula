function uber(y){
const destino1 = "direita"
const destino2 = "esquerda"
const semdestino = "parado"

if(y === destino1){
    return console.log("Trabalho")
}else if(y === destino2){
    return console.log("Escola")
}else if(y === semdestino) {
    return console.log("Ficarei parado")
}else{
    return console.log("escolhe algo")
}
}

uber("parado")
uber("direita")
uber("esquerda")
uber("xxxx")