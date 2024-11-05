window.onload = function() {
    let boton = document.querySelector("input[type='button'");

    boton.onclick = añadirLi;
}

function añadirLi(){
    let mensaje = prompt("Añade un mensaje para añadir a la lista: ");
    let nodoPadre = document.querySelector("ul");
    let nuevoNodo = document.createElement("li");
    mensaje = document.createTextNode(mensaje);

    nuevoNodo.appendChild(mensaje);
    nodoPadre.appendChild(nuevoNodo);
}