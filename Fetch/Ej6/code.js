
let salida = document.querySelector("#salida");
const url = "https://dragonball-api.com/api/characters";

fetch(url)
    .then(function (respuesta) {
        if (!respuesta.ok) {
            throw new Error("Error del Fetch: " + respuesta.status);
        }
        return respuesta.json();
    })
    .then(function (datos) {
        let section = document.getElementsByTagName("section")[0];
        datos["items"].forEach(element => {
            let article = document.createElement("article");
            let h3 = document.createElement("h3");
            let texto = document.createTextNode(element.name);
            h3.appendChild(texto);
            article.appendChild(h3); 

            let img = document.createElement("img");
            img.src = element.image
            img.width = "100";
            article.appendChild(img);

            h3 = document.createElement("h3");
            texto = document.createTextNode(element.race);
            h3.appendChild(texto);
            article.appendChild(h3); 

            h3 = document.createElement("h3");
            texto = document.createTextNode(element.maxKi);
            h3.appendChild(texto);
            article.appendChild(h3); 

            section.appendChild(article);
        });
        
    })
    //para que haya error
    .catch(function (error) {
        alert("Problemas accediendo a la URL:" + error);
    });
