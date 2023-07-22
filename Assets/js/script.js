var valor;
var result;

function botao (num) {
    valor = document.calc.visor.value += num;
}

function reseta () {
    document.calc.visor.value = ' ';
}

function calcula () {
    result = eval(valor);
    document.calc.visor.value = result;
}   