const libro = JSON.parse(localStorage.getItem("libro"));

let section = document.getElementsByTagName("section")[0];
let table = document.createElement("table");
table.setAttribute("class","estilo");
let tr = createTableNodeRow("th","Datos del libro");
let th = addCell("th","Info",tr);
th = addCell("th","Other books",tr);
table.appendChild(tr);
section.appendChild(table);

for (const datos in libro) {
    let row = createTableNodeRow("td", datos);
    let info;
    let formato = new RegExp('https');
    if (typeof(libro[datos]) === "object") {
        for (const element in libro[datos]) {
            if (typeof(libro[datos][element]) === "object") {
                let lista = document.createElement("ul");
                libro[datos][element].forEach(elemento => {
                    let li = document.createElement("li");
                    li.appendChild(document.createTextNode(elemento));
                    lista.appendChild(li);
                });
                row.appendChild(lista);            
            }else{
                info = libro[datos][element];
                addCell("td",info, row);
            }
        }
    }else if (formato.test(libro[datos])){
        let img = document.createElement("img");
        img.setAttribute("src", libro[datos]);
        row.appendChild(img);
    }else{
        info = libro[datos];
        addCell("td", info, row);
    }
    table.appendChild(row);
}

let volverBtn = document.getElementsByTagName("a")[0];
volverBtn.addEventListener("click", function (){this.href = "./inicio.html"});

function createTableNodeRow(type, text){
    let row = document.createElement("tr");
    let cell = document.createElement(type);
    let textNode = document.createTextNode(text);

    cell.appendChild(textNode);
    row.appendChild(cell);

    return row;
}

function addCell(type, text, row){
    let cell = document.createElement(type);
    let textNode = document.createTextNode(text);

    cell.appendChild(textNode);
    row.appendChild(cell);
}