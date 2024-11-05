window.onload = function(){
    let boton1 = document.getElementsByTagName("input")[0];
    let boton2 = document.querySelectorAll("input[type='button'")[1];
    let boton3 = document.querySelectorAll("input[type='button'")[2];

    boton1.onclick = function(){

        //Creamos el nodo
        let nuevo = document.createElement("p");
        //2.- Opcional (Atributos)
        nuevo.setAttribute("class","parra");
        //3.- Creamos nodo texto
        let texto = document.createTextNode("Soy el nuevo parrafo y me llamo Miguel.");
        //4.- Engancho el nodo texto al nuevo nodo
        nuevo.appendChild(texto);
        //5.- Asignar un padre al nuevo nodo
        let papi = document.querySelector("section");
        let bro = document.querySelectorAll("div")[2];
        papi.insertBefore(nuevo,bro);
        //papi.appendChild(nuevo);
        this.disabled = true;
        boton2.disabled = false;
    }

    boton2.onclick = function() {
        let victima = document.getElementsByClassName("parra")[0];
        let papi = victima.parentNode;
        papi.removeChild(victima);
        boton1.disabled = false,
        this.disabled = true;
    }

    boton3.onclick = borrar;

    function borrar() {
        let papi = document.querySelector("section");
        let victimas = document.getElementsByTagName("div");
        /*
        victimas.forEach(element => {
            papi.removeChild(element);
        });

        Forma jaime

        while(papi.firstChild) papi.removeChild(papi.firstChild);
        */

        for(muerto of victimas){
            papi.removeChild(muerto);
        }
    }
}