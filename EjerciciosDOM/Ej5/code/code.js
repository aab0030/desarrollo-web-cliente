function cambiar() {
    let cajas = document.getElementsByTagName("p");
    let caja2 = cajas[1];
    let caja1 = cajas[0];

    let claseCaja2 = caja2.getAttribute("class");
    let claseCaja1 = caja1.getAttribute("class");

    caja1.setAttribute("class",claseCaja2);
    caja2.setAttribute("class",claseCaja1);
}