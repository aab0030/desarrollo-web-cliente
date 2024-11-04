window.onload = function (){
    let tabla = document.getElementsByTagName("table")[0];
    let botones = document.getElementsByTagName("input");

    botones[0].onclick = function() {
        cambiarDimension(tabla);
    }
    botones[1].onclick = function() {
        cambiarBorde(tabla);
    }
    botones[2].onclick = function() {
        cambiarAlign(tabla);
    }
}

function cambiarDimension(tabla){
    let dimensiones = [-1,-1];
    //Altura
    while (dimensiones[0] < 0) {
        dimensiones[0] = prompt("Altura de la tabla " + tabla.getAttribute("height") +" Nueva altura:");
    }
    //Ancho
    while (dimensiones[1] < 0) {
        dimensiones[1] = prompt("Ancho de la tabla " + tabla.getAttribute("width") +" Nuevo ancho:");
    }

    tabla.setAttribute("height",dimensiones[0]);
    tabla.setAttribute("width",dimensiones[1]);
}

function cambiarBorde(tabla) {
    let borde = -1;

    while (borde < 0) {
        borde = prompt("Altura de la tabla " + tabla.getAttribute("border") +" Nuevo borde:");
    }

    tabla.setAttribute("border",borde);
}

function cambiarAlign(tabla) {
    let align = tabla.getAttribute("align");
    switch (align) {
        case "center":
            tabla.setAttribute("align","right");
            break;
        case "right":
            tabla.setAttribute("align","left");
            break;
        case "left":
            tabla.setAttribute("align","center");
            break;
        default:
            break;
    }
}