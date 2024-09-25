var tam;
var posicionIni;
var posicion = [];
var direccion;
var movimiento = [];
var cont = 2;
var pasos = 0;
var giro;

function tamInicial(tamX, tamY){
    tam = new Array((Number(tamX)),(Number(tamY)));
}

function posicionInicial(posicionX,posicionY){
    posicionIni = new Array((Number(posicionX)),(Number(posicionY)));
    posicion = posicionIni;
}

function obtenerPasos(movimientos){
    movimiento = movimientos;
    direccion = movimiento[0];
    console.log(movimiento);
    console.log(direccion);
}

tamInicial(1000,1000);
posicionInicial(50,50);
obtenerPasos(["N",3,"I",3,"I",2,"D",40]);

function girarYandar(puntoCardinal, turn){
    switch (puntoCardinal) {
        case "N":
            if (turn = "D"){
                direccion = "E";
                posicion[0] += pasos;
            }else{
                direccion = "O";
                posicion[0] -= pasos;
            }
            break;
        case "S":
            if (turn = "D"){
                direccion = "O";
                posicion[0] -= pasos;
            }else{
                direccion = "E";
                posicion[0] += pasos;
            }
            break;
        case "E":
            if (turn = "D"){
                direccion = "S";
                posicion[1] += pasos;
            }else{
                direccion = "N";
                posicion[1] -= pasos;
            }
            break;
        case "O":
            if (turn = "D"){
                direccion = "N";
                posicion[1] -= pasos;
            }else{
                direccion = "S";
                posicion[1] += pasos;
            }
            break;
    }
}

pasos = (Number(movimiento[1]));

switch (direccion) {
    case "N":
        posicion[1] -= pasos;
        break;
    case "S":
        posicion[1] += pasos;
        break;
    case "E":
        posicion[0] += pasos;
        break;
    case "O":
        posicion[0] -= pasos;
        break;
}
console.log(posicion);
while (movimiento[cont] != null){
    if (cont % 2 == 0){
        giro = movimiento[cont];
    }else{
        pasos = (Number(movimiento[cont]));

        girarYandar(direccion, giro);
    }
    cont++;
}

if (posicion[0] < 0 || posicion[1] < 0 || posicion[0] > posicionIni[0] || posicion[1] > posicionIni[1])
    console.log("Lo has logrado, has conseguido salir del bosque.");
else console.log("Mami me siento triste.");