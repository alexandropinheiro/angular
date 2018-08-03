var minhaVar = 'Minha variavel';
var numero = 0;
let num = 10; //ES6 - 2015
const PI = 3.14;

var n : any = 'texto';
n = 4;

var numeros = [1, 2, 3];
numeros.map(function(valor){
    return valor * 2;
});

numeros.map(valor => valor * 2);

function MinhaFuncao(x, y){
    return x + y;
}

class Math {
    sum(x,y){
        return x + y;
    }
}