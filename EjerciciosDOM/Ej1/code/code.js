window.onload = function () {
    let botones = document.getElementsByTagName("input");

    botones[0].onclick = mostrar;
    botones[1].onclick = cambiar;
}

function mostrar(){
    let enlace = document.getElementsByTagName("a")[0];

    alert("Texto: " + enlace.textContent + " Url: "+enlace.getAttribute("href"));
}

function cambiar() {
    let enlace = document.getElementsByTagName("a")[0];

    enlace.setAttribute("href","www.bing.com");
    enlace.textContent = "He cambiado";
}