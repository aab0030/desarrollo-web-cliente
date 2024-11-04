window.onload = function() {
    let parra = document.getElementsByTagName("p");

    parra[1].onclick = function () {
        let estilo = parra[0].getAttribute("style");
        this.setAttribute("style",estilo);
    }
}