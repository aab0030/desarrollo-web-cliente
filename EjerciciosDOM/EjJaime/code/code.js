window.onload = function () {
    let position = 0;
    let tds = document.getElementsByTagName("td");
    tds[0].style.setProperty("background-color","black");
    window.onkeydown = function(e){
        position = moverse(position,tds,e.key);
    }
}

function moverse(position, tds,tecla){
    let estilos = window.getComputedStyle(tds[position]);
    let color = estilos.getPropertyValue("background-color");
    
    switch (tecla) {
        case "ArrowRight":
            tds[position].style.setProperty("background-color","white");
            position++;
            if (position > tds.length - 1) {
                position = 0;
            }
            tds[position].style.setProperty("background-color",color);
            break;
    
        case "ArrowLeft":
            tds[position].style.setProperty("background-color","white");
            position--;
            if (position < 0) {
                position = tds.length - 1;
            }
            tds[position].style.setProperty("background-color",color);
            break;
        case "ArrowUp":
            tds[position].style.setProperty("background-color","white");
            if (position > 0 && position < 5) {
                position = position + 20;
            }else
                position = position - 5;
            
            tds[position].style.setProperty("background-color",color);
            break;
        case "ArrowDown":
            tds[position].style.setProperty("background-color","white");
            
            if (position > 20 && position < 25) {
                position = position - 20;
            }else
                position = position + 5;
            tds[position].style.setProperty("background-color",color);
            break;
    }

    

    return position;
}