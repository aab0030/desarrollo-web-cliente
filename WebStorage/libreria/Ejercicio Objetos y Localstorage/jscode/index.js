let section = document.getElementsByTagName("section")[0];
let numLibros = 0;
library.forEach(element => {
    let nodeArticle = createSection(element, section);
    nodeArticle.addEventListener("click", function (){
        localStorage.setItem("libro", JSON.stringify(element));
        location.href = "./mostrar.html";
    });
    numLibros++;
});

let h1 = document.getElementsByTagName("h1")[0];
h1.appendChild(document.createTextNode("En la libreria hay " + numLibros + " libros."));




function createSection(element, section) {
    let article = document.createElement("article");
    article.setAttribute("class", "presentacion");
    let h3 = document.createElement("h3");
    let h3Text = document.createTextNode(element["title"]);
    let img = document.createElement("img");
    img.setAttribute("src", element["cover"]);

    section.appendChild(article);
    h3.appendChild(h3Text);
    article.appendChild(h3);
    article.appendChild(img);
    return article;
}