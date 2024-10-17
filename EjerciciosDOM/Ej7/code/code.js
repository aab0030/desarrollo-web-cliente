window.onload = function () {
    const COLORES = ["white","black","blue","red"];

    let tabla = document.getElementsByTagName("table")[0];
    tabla.setAttribute("style","border: 1px solid black; width: 400px; height: 400px;");

    let celdas = document.getElementsByTagName("td");
    let celdaCabecera = document.getElementsByTagName("th");
    for (const celda of celdas) {
        celda.setAttribute("style","border: 1px solid black");
        celda.setAttribute("bgColor","white");
        celda.onclick = function () {
            cambiarColor(this, COLORES);
        }
    }
    for (const celda of celdaCabecera) {
        celda.setAttribute("style","border: 1px solid black");
        celda.setAttribute("bgColor","white");
        celda.onclick = function () {
            cambiarColor(this, COLORES);
        }
    }
}

function cambiarColor(ele, colores) {
    let colorEle = ele.getAttribute("bgColor");
    console.log(colorEle);
    
    
    for (var i = 0; i < colores.length && colores[i] != colorEle; i++);
    i++;
    if (i == colores.length) {
        i = 0;
    }
    console.log(i);
    
    ele.setAttribute('bgColor',colores[i]);
}