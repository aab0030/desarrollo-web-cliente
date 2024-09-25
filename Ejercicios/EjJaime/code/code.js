var tam;
var posicionIni;
var posicion;
var direccion;
var movimiento = [];
var cont = 2;
var pasos = 0;
var giro;

function tamInicial(tamX, tamY){
    tam = new Array(tamX,tamY);
}

function posicionInicial(posicionX,posicionY){
    posicionIni = new Array(posicionX,posicionY);
    posicion = posicionIni;
}

function obtenerPasos(movimientos){
    movimiento = movimientos;
    direccion = movimiento[0];
}

function girarYandar(puntoCardinal, turn){
    switch (direccion) {
        case "N":
            if (turn = "D"){
                direccion = "E";
                posicion(0) += pasos;
            }else{
                direccion = "O";
                posicion(0) -= pasos;
            }
            break;
        case "S":
            if (turn = "D"){
                direccion = "O";
                posicion(0) -= pasos;
            }else{
                direccion = "E";
                posicion(0) += pasos;
            }
            break;
        case "E":
            if (turn = "D"){
                direccion = "S";
                posicion(1) -= pasos;
            }else{
                direccion = "N";
                posicion(1) += pasos;
            }
            break;
        case "O":
            if (turn = "D"){
                direccion = "N";
                posicion(1) += pasos;
            }else{
                direccion = "S";
                posicion(1) -= pasos;
            }
            break;
    }
}

pasos = movimiento[1];

switch (direccion) {
    case "N":
        posicionInicial(1) += pasos;
        break;
    case "S":
        posicionInicial(1) -= pasos;
        break;
    case "E":
        posicionInicial(0) += pasos;
        break;
    case "O":
        posicionInicial(0) -= pasos;
        break;
}

while (movimiento[cont] != empty){
    if (cont % 2 == 0){
        giro = movimiento[cont];
    }else{
        pasos = movimiento[cont];

        girarYandar(direccion, giro);
    }
    cont++;
}

if (posicion(0) < 0 || posicion(1) < 0){}