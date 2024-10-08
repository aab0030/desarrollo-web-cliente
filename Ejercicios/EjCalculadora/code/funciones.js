function recogerNumeros(cadena) {
    cadena = (Number)(cadena);
    if (isNaN(cadena)) {
        recogerNumeros(prompt("Introduce un número correcto: "));
    }
    return cadena;
}

function sumar(n1, n2) {
    return n1+n2;
}

function restar(n1, n2) {
    return n1-n2;
}

function multiplicar(n1, n2) {
    return n1*n2;
}

function dividir(n1, n2) {
    return n1/n2;
}

function recogerOperacion(simbolo, num1, num2) {
    switch (simbolo) {
        case '+':
            return sumar(num1,num2);
            break;
        case '-':
            return restar(num1,num2);
            break;
        case '*':
            return multiplicar(num1,num2);
            break;
        case '/':
            return dividir(num1,num2);
            break;
        default:
            return "";
            break;
    }
}

function main() {
    var n1 = 0, n2 = 0;
    var operacion = "";
    n1 = recogerNumeros(prompt("Introduce un número: "));
    n2 = recogerNumeros(prompt("Introduce otro número: "));

    while (operacion == "") {
        operacion = recogerOperacion(prompt("Introduce el signo de la operación que quieres hacer (+,-,*,/):"),n1,n2);
    }
    alert("Resultado: "+operacion);
}