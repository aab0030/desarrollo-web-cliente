window.onload = function () {
    let botonGenerar = document.querySelectorAll("input[type='button']")[0];

    botonGenerar.onclick = generar;
}

function generar(){
    let nodoHermano = document.querySelectorAll("p")[0];
    let nodoPadre = nodoHermano.parentNode;
    let nodoNuevo = nodoHermano.cloneNode();
    nodoNuevo.textContent = nodoHermano.textContent;

    nodoNuevo.setAttribute("class","clase2");
    nodoPadre.insertBefore(nodoNuevo,nodoHermano);
}

function generarNuevo(){
    
}