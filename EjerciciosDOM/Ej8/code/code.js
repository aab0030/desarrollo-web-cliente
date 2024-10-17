window.onload = function () {
    imagen = document.getElementsByTagName("img")[0];

    imagen.onmouseover = function () {
        cambiar1(this);
    }
    imagen.onmouseout = function () {
        cambiar2(this);
    }
}

function cambiar1(ele) {
    ele.src = "ant.jpeg";
}

function cambiar2(ele) {
    ele.src = "logo.jpg"
}