window.onload = function() {
    lis = document.querySelectorAll("body>ul>li");
    console.log(lis);
    
    lis.forEach((element,pos) => {
        element.onclick = function (){
            mostrar(pos);
        }
    });
}

function cerrar(){
    lista = document.querySelectorAll(".sublista");
    lista.forEach((element) =>{
        element.style.setProperty("display", "none");
    })
}

function mostrar(cont1) {
    lista = document.querySelectorAll(".sublista");

    estilo = window.getComputedStyle(lista[cont1]);
    if(estilo.getPropertyValue("display") == "none") {
        cerrar();
        lista[cont1].style.setProperty("display", "block");
    }else{
        cerrar();
    }
}