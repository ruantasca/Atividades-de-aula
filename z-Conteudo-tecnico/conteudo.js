 //== "verifica se é igual, mas nao compara o tipo"
//=== "verofoca se é igual inclusive o tipo"
//&& "e"
//|| "ou"
//!= "diferente ou não igual"

//"função"
//funtion nomequalquer(argumento){
//    oq precisa acontecer (argumento pcomeçar == com oq estou comparamdo)
//retorrnado algo
//}


//para chamar e função "nomequalquer(valor argumento)"
//--------------------------------------------------------------------------------------------------------------
//calculando fatorial
//function numfatorial(x){
  //  if (x === 0 || x === 1){
  //      return 1 
  //  }else{
   ///     return x * numfatorial(x - 1)
   // }
//}
    

//console.log(numfatorial(5))

//-------------------------------------------------------------------------------------------------------------
//for = "sei quantas vezes devo repetir"
//while = "não sei quantas vezes devo repetir"
//do while = "faz uma verificação antes, so se tiver verdadeira antes"
//for in = obj
//for off = array
//array = estrutura de dados como se fosse uma caixa
//
//exmplo de for loop que imprime os numeros, for não pode variavel no limite
for (let i = 1; i<= 5; i++){
  console.log(i);
}

//exemplo de while
let i = 1;
while(i <= 5){
  console.log(i)
  i++;
}

//exemplo de do... while loop que imprime os numeros de 1 a 5
let i2 = 1;
do{
  console.log(i2);
  i2++

}while( i2 <= 5)


//exemplo de for...in loop
const obj = { a: 1,b: 2,c: 3};
for (let prop in obj){
  console.log(prop + ':' + obj [prop])
}
//
//tag principios 
//css inline
//css arquivo de referencia