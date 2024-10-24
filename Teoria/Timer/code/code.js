let TIMER;
function guille(){
    console.log("Soy antiñolo");
}

window.onload = function() {
    alert("kk");
    /**
     *  Funciones asíncronas
     *  timer ES LA VARIABLE
     *  setInterval ES EL METODO QUE DECLARA MI TIMER
     * 
     *  SETTIMEOUT
     */
    
    document.getElementsByTagName("button")[0].onclick = function() {
        let frase = "";
        let contador = 0;
        TIMER = setInterval(function(){
            let dedo = document.querySelector("div");
            contador++;
            frase += contador;
            dedo.innerHTML = contador;
        },1000);
        this.disabled = true;
    };

    document.getElementsByTagName("button")[1].onclick = function() {
        clearInterval(TIMER);
        document.getElementsByTagName("button")[0].disabled = false;
    };
}