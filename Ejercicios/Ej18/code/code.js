var mesasR = [];
function main() {
    pedirNumeroMesas(prompt("Introduce el números de mesas: "));
    while(pedirMesa(prompt("¿Cuántas personas sois?")));
}

function pedirNumeroMesas(mesas) {
    mesas = Number(mesas);
    while (isNaN(mesas) || mesas <= 0) {
        mesas = Number(prompt("Introduce un valor correcto: "));
    }
    generarMesas(mesas);
}

function generarMesas(num) {
    let i = 0;
    while (i < num) {
        mesasR.push(Math.trunc(Math.random()*5));
        i++;
    } 
    estadoMesas();
}

function estadoMesas() {
    let frase = "Estado de las mesas: ";
    mesasR.forEach(elemento => {
        console.log(elemento);
        frase += elemento + " ";
    });

    console.log(frase);
}
function pedirMesa(personas) {
    personas = Number(personas);
    while (isNaN(personas) || personas < 0 || personas > 4) {
        personas = Number(prompt("Introduce un valor correcto: "));
    }
    let index = buscarVacia();
    if (index != -1) {
        mesasR[index] += personas;
    }else{
        index = buscarMesa(personas);

        if (index == -1) {
            alert("Lo siento no hay suficiente hueco");
            return false;
        }
        mesasR[index] += personas;
    }
    estadoMesas();
    return true;
}

function buscarVacia() {
    for (let i = 0; i < mesasR.length; i++) {
        if (mesasR[i] == 0) {
            return i;
        }
    }
    return -1;
}
function buscarMesa(persona) {
    for (let i = 0; i < mesasR.length; i++) {
        if (mesasR[i] + persona <= 4) {
            return i;
        }
    }
    return -1;
}