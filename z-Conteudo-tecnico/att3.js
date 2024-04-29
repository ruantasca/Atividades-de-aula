function soma(x, y){
    let resultado = x + y 
    console.log(resultado)
}
//soma(1, 2)

function subtracao(x, y){
    let resultado = x - y
    console.log(resultado)
}
//subtracao(1, 2)

function multiplicacao(x, y){
    let resultado = x * y
    console.log(resultado)
}
//multiplicacao(1, 2)

function divisao(x, y){
    let resultado = x / y
    console.log(resultado)
}
//divisao(2, 1)

function media(x,y,z){
    let resultado = (x +y)/z
    console.log(resultado)
}
//media(2,3,4)
function parimpar(x){
    if(x % 2 === 0){
        console.log("par")
}else  console.log("impar")
}
//parimpar (1)

function positivonegativo(x){
    if (x > 0){
        console.log("positivo")
    }else if (x < 0) {
        console.log("negativo")
    } else {
        console.log("Zero")    
    }

}
//positivonegativo(0)

function fatorial(x){
    if (x <= 0 || x === 1){
    return;}
    else{
        return x *fatorial(x - 1)
    }
}
//console.log(fatorial(5))

function esprimo(x){
    var divisores = 0
    var numero = x
    for (var count = 1; count <= numero; count++){
    if(numero % count == 0)
    divisores ++;
    if (divisores === 2){
        console.log("é primo");
    }
    else{console.log("não é primo ")}

}
}
//esprimo(3)

function maior(x, y, z){
 console.log(Math.max(x, y, z))
}
//maior(3, 5, 7)

function inverter(x, y, z){
    var numeros = [x, y, z]
    var numberive = numeros.reverse()
    console.log(numberive)
}
//inverter(1, 3, 5)

function somadigitos(x){
var z = (
    parseFloat(
        x.toString().split('')
    )
)
var y = (
    parseFloat(
        x.toString().split('').reverse()
    )
)
console.log(z + y)

} 
//somadigitos(43)

function potencia(x, y){
    var resultado = x ** y
    console.log(resultado)
}
//potencia(10, 2)

function cparaf(x){
    var resultado = (x * 1.8 + 32) 
    console.log(resultado)
}
//cparaf(25)

function anobissexto(x){
    if((x % 4 == 0 && x % 100 != 0) || x % 400 == 0){
    console.log("o ano é bissexto")}
    else{
console.log("o ano não é bissexto")
    }

}

//anobissexto(2003)
function decparabi(x){
    console.log((x >>> 0).toString(2))
}
//decparabi(80)

function mdc(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

//console.log(mdc(15,6))
function mmc(a,b){
    n1 = a;
    n2 = b;
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    console.log((n1 * n2)/a)
}
//mmc(18, 24)

function palindromo(x){
var numerost = String(x)
if(numerost === numerost.split('').reverse().join('')){
    console.log("é palindromo")
}else {
    console.log("não é palindromo")
}


}
//palindromo("arara")

function maioremenor(x, y, z){
    var arr1 = [x, y, z]
    var arr2 = [x, y, z]
    console.log(Math.max(...arr1))
    console.log(Math.min(...arr2))
}
maioremenor(2, 3, 4)

function crescente (x, y, z){
    var arr = [x, y, z]
    console.log(arr.sort())
}
//crescente( 4,3,6)

function raiz(x){
    console.log(Math.sqrt(x))
}
//raiz(4)

function vogais(x){
    const vogal = x.match(/[aeiou]/gi);
    const cont = vogal.length;
    console.log(cont)
}
//vogais('aviao')

function palavras(stri){
    var contador = 1
stri = stri.trim();
    for (var i = 0; i < stri.length; i++){
        if(stri[i] === ' '|| stri[i] === '.' || stri[i] === ',' || stri[i] === ':' || stri[i] === ';' || stri[i] === '<' || stri[i] === '>' || stri[i] === '´' ){
        contador++
        while(stri[i] === ' ' || stri[i] === '.' || stri[i] === ',' || stri[i] === ':' || stri[i] === ';' || stri[i] === '<' || stri[i] === '>' || stri[i] === '´' )
        i++
    }
    }
    console.log(contador)
}
//palavras("esta é uma frase de exemplo")