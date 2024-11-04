 let TIMER;

 window.onload = function () {
    let divs = document.getElementsByTagName("div");
    let boton = document.getElementsByTagName("input")[0];

    boton.onclick = function(){
        for (let div of divs) {
            let estilos = window.getComputedStyle(div);
            let posicion = estilos.getPropertyValue("left");
            posicion = Number(posicion.substring(0, posicion.length-2));
            TIMER = setInterval(() => {
                posicion += parseInt(Math.random()*51+50);
                if (posicion + 100 < window.innerWidth) {
                    console.log(posicion);
                    div.style.left = posicion+"px";
                }else{
                    div.style.left = window.innerWidth - 100+"px";
                    clearInterval(TIMER);
                }
            }, 500);
        }
    }
 }
 
