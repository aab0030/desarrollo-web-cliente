window.onload = function () {
    let text = document.getElementsByTagName("input");
    text[0].onkeydown = function (e){
        escribir(text[1],e.key);
    }
}

function escribir(texto, letra){
    texto.value += letra;
}