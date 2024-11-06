let fondos = ["red","green","blue","yellow","orange","pink","lightblue","lightgreen"];
let ccolores = ["#00FF48","#D4478E","#FFD100","#0070FF","#7AAA83","#385B66","#ED91BF","#95AD95"];

window.onload = function (){

    let cont = 0;

    /*
        let nodoDiv = document.createElement("div");
        let textoDiv = document.createTextNode("");
        nodoDiv.appendChild(textoDiv);
        let main = document.getElementsByTagName("main")[0];
        main.appendChild(nodoDiv);
    */ 
    
    window.onclick = function(element){
        cont = changeBg(cont);
    }
    window.onmousedown = function(element){
        createFigure(element.clientX,element.clientY);
    }
    window.onmouseup = function(){
        deletefigure();
    }
}

function changeBg(cont){
    cont++;
    if (cont == fondos.length - 1) {
        cont = 0;
    }
    let main = document.querySelector("main");
    main.style.backgroundColor = fondos[cont];
    return cont;
}

function createFigure(positionX, positionY) {
    let bloque = document.createElement("div");
    let main = document.querySelector("main");
    let tamano = main.clientWidth / 10;
    let posicion = [positionX - tamano / 2 + "px", positionY - 100 + "px"];

    bloque.setAttribute("style","position:absolute;width:"+tamano+"px;height:"+tamano+"px;background-color:white;border:1px solid black;top:"+posicion[1]+";left:"+posicion[0]+";");

    if (Math.random() < 0.5) {
        bloque.style.borderRadius = "240px";
    }
    bloque.style.backgroundColor = ccolores[parseInt(Math.random()*ccolores.length)];

    main.appendChild(bloque);

    window.onmousemove = function(element){
        bloque.style.top = element.clientY - tamano/2 + "px";
        bloque.style.left = element.clientX - tamano/2 + "px";
    }
}

function deletefigure(){
    let bloque = document.querySelector("div");
    let nodoPadre = bloque.parentNode;

    nodoPadre.removeChild(bloque);
}