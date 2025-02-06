document.querySelector("button").addEventListener("click", function () {
    let salida = document.querySelector("#salida");
    const url = "https://dog.ceo/dog-api/";//url de nuestra bbdd 
  
    fetch(url)
      .then(function (respuesta) {
        if (!respuesta.ok) {
          throw new Error("Error del Fetch: " + respuesta.status);
        }
        return respuesta.json();
      })
  
      .then(function (datos) {
        datos.forEach(dato => {
            
            salida.textContent += dato.body + '\n';
            
        });
      })
      //para que haya error
      .catch(function (error) {
        alert("Problemas accediendo a la URL:" + error);
      });
  });
  