window.onload = function () {
    let botones = document.getElementsByTagName("button");
    
    //botones[0].onclick = () => cambiar(this);

    for (const boton of botones) {
        boton.onclick = function(){
           alert(this)
        }
    }
}

function cambiar(element) {
    //alert(ele)
    console.log(element.innerText);
    
    document.bgColor = element.innerText;
}