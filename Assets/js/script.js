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
   

function plusorMinus() {
    if (!isNaN(parseFloat(valor))) {
        var numberValue = parseFloat(valor);
        numberValue = -numberValue;

        valor = document.calc.visor.value = numberValue;
    }
}