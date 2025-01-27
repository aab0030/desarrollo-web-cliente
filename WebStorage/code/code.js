window.onload = function () {
    let sendBtn = document.querySelector("input[type='submit']");

    sendBtn.addEventListener("click",function (e) {
        e.preventDefault();
        let nombre = document.getElementById("nombre").value;
        let clave = document.getElementById("clave").value;
        
        localStorage.setItem("nombre", nombre);
        localStorage.setItem("clave", clave);
        
        // if (localStorage.key("nombre") !== null && localStorage.key("clave") !== ""){
        window.location.href = "Ej1Redirection.html";
        // }
    });
}