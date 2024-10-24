window.onload = function () {
    let botones = document.getElementsByTagName("button");

    for (let boton of botones) {
        boton.onclick = function(){
            mover(this);
        }
    }
}

let salto = 50;

function mover(boton) {
    let imagen = document.getElementsByTagName("img")[0];
    let estilos = window.getComputedStyle(imagen);
    let posicion = estilos.getPropertyValue("left");
    posicion = Number(posicion.substring(0, posicion.length-2));

    if (boton.textContent == "Izquierda"){
        if (posicion - salto < 0)
            posicion = 0;
        else
            posicion = posicion - salto;
        imagen.style.setProperty("left", posicion +"px");
    }
    else{
        if (posicion + salto + imagen.offsetWidth > window.innerWidth)
            posicion = innerWidth - imagen.offsetWidth;
        else
            posicion = posicion + salto;
    } imagen.style.setProperty("left", posicion +"px");
}