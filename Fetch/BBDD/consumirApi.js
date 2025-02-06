document.querySelector("button").addEventListener("click", function () {
    let salida = document.querySelector("#salida");
    const url = "https://dog.ceo/api/breeds/image/random";
  
    const options =  {
      method: 'GET',
      headers: {
          "x-rapidapi-key": "729413b8e3msh377a94be04c10a1p1cc325jsnaa9376328948",
          "x-rapidapi": "omgvamp-hearthstone-v1.p.rapidapi.com",
      },
    };
  
    //uno o dos argumentos si o si
    //para cuando sea correcto
    fetch(url)
      .then(function (respuesta) {
        //capturo la respuesta
        console.log(respuesta);
  
        if (respuesta.ok) {
          throw new Error("Error del Fetch: " + respuesta.status);
        }
  
        //devuelvo el formato (texto o json)
        return respuesta.json();
      })
  
      /*.then(function (datos) {
        //capturo y gestino los datos
        //console.log(datos);
        //ESTO ES UNA GUARRADA NO VALE PARA EL EXAMEN
        let res = "";
        for (const luis of datos) {
          res += "<h2>${luis.title}</h2>";
          res += "<p>${luis.body}</p>";
        }
  
        salida.innerHTML = res;
        //salida.textContent = datos;
      })*/
  
      .then(function (datos) {
        //capturo y gestino los datos
        //console.log(datos);
       
        let res = "<img width='500px' src='${datos.message}'/>";
  
        salida.innerHTML = res;
      })
      //para que haya error
      .catch(function (error) {
        alert("Problemas accediendo a la URL:" + error);
      });
  });