window.onload = function () {
    let a = document.getElementsByTagName("a")[0];

    a.onmouseover = function () {
        let nodeTexto = document.createTextNode("Esto es un enlace.");
        let nodeDiv = document.createElement("div");
        let nodoPadre = document.querySelector("body");

        nodeDiv.appendChild(nodeTexto);
        nodoPadre.appendChild(nodeDiv);
    }

    a.onmouseout = function () {
        let nodoPadre = document.querySelector("body");
        let nodoDiv = document.querySelector("div");

        nodoPadre.removeChild(nodoDiv);
    }
}