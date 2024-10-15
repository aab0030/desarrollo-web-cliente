window.onload = main;

function main() {
    let parras = document.getElementsByTagName("table");
    let dedo = parras[0];


    console.log(parras);
    dedo.setAttribute("width","2000px");

    let bombi = document.getElementById("bombom");

    //Atributo innerHTML -- T zaca to lo malo
    console.log(bombi.innerHTML);

    //bombi.innerHTML = "<b>Acabo de cargarme el arbol DOM</b>";

    //Atributo innerText -- Respeta el CSS
    console.log(bombi.innerText);

    //Atributo textContent -- No regspeta er CSS
    console.log(bombi.textContent);
}


/*
    Acceso a atributos

    1) Notación PUNTO
    2) GET y SET 
    3) Atributos que tienen todas las etiquetas
*/