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
    let main = document.querySelector("main");
    console.log(main);
    window.onclick = function(){
        cont = changeBg(cont);
        createFigure();
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