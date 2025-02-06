document.querySelector("button").addEventListener("click", function () {
    let salida = document.querySelector("#salida");
    const url = "";//url de nuestra bbdd 
  
    fetch(url)
      .then(function (respuesta) {
        if (respuesta.ok) {
          throw new Error("Error del Fetch: " + respuesta.status);
        }
        return respuesta.json();
      })
  
      .then(function (datos) {
          let res = "";
        for (const juego of datos) {
          let caja = document.createElement("article");
          let titulo = document.createElement("h2");
          titulo.textContent = juego.nombre;
          let img = document.createElement("img");
          img.setAttribute("src",juego.imagen)
          img.setAttribute("width","150px")
  
          caja.appendChild(titulo)
          caja.appendChild(img)
          salida.appendChild(caja)
        }
      })
      //para que haya error
      .catch(function (error) {
        alert("Problemas accediendo a la URL:" + error);
      });
  });