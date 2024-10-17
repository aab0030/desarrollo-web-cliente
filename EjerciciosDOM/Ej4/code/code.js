window.onload = function(){
    let botones = document.getElementsByTagName("button");
    let imgs = ["ant.jpeg","alas.jpeg","coche.jpeg","logo.jpg","nube.jpeg"];

    botones[0].onclick = function(){
        retroceder(this,imgs);
    }
    botones[1].onclick = function(){
        avanzar(this,imgs);
    }
}

function avanzar(ele,fotos) {
    let foto =  document.getElementsByTagName("img")[0];
    let fotoEle = foto.src.split("/")[foto.src.split("/").length - 1];
    console.log(fotoEle);
    
    for (var i = 0; i < fotos.length && fotos[i] != fotoEle; i++);
    i++;
    if (i == fotos.length) {
        i = 0;
    }
    foto.setAttribute('src',"fotos/"+fotos[i]);
}

function retroceder(ele,fotos) {
    let foto =  document.getElementsByTagName("img")[0];
    let fotoEle = foto.src.split("/")[foto.src.split("/").length - 1];
    console.log(fotoEle);
    
    for (var i = 0; i < fotos.length && fotos[i] != fotoEle; i++);
    i--;
    if (i == -1) {
        i = fotos.length - 1;
    }
    foto.setAttribute('src',"fotos/"+fotos[i]);
}