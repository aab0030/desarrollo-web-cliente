window.onload = function () {
    let boton = document.querySelector("input[type='button']");

    boton.onclick = copiar;
}

function copiar() {
    let cajas = document.querySelectorAll("input[type='text']");
    
    cajas[1].value = cajas[0].value;
}