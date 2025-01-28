window.onload = function () {
    let nombre = localStorage.getItem("nombre");
    let clave = localStorage.getItem("clave");
    console.log(localStorage);
    
    let h1 = document.getElementsByTagName("h1")[0];
    h1.textContent = "Bienvenida " + nombre;
    
    let div = document.getElementsByTagName("div")[0];
    div.textContent = "Tu contraseña es " + clave;

    let btnBorrar = document.getElementsByTagName("button")[0];
    btnBorrar.addEventListener("click", function () {
        localStorage.clear();
        location.reload();
    });
}