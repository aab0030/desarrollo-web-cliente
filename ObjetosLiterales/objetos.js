window.onload = function () {
    const tutor = {
        nombre: "Alejandra",
        edad: "26" ,
        DNI: "12345678Z",
        tituloUniversitario: "Ingenieria informática",
        mostrar: function () {
            let info = Object.values(this);
            info = info.filter((info) => typeof(info) === "string");
           
            let texto = "";
            for(element of info){
                texto += element + "\n";
            }
        }
    };
    
    const asignaturas = [
        programacion = {
            nombre: "Programacion",
            curso: 1,
            horasTotales: 8
        },
        bbdd = {
            nombre: "Base de datos",
            curso: 1,
            horasTotales: 6
        },
         desarrolloWeb = {
            nombre: "Desarrollo de Aplicaciones en entorno de Servidor",
            curso: 2,
            horasTotales: 8
        },
        desarrolloCliente = {
            nombre: "Desarrollo de Aplicaciones en entorno Cliente",
            curso: 2,
            horasTotales: 6
        }
    ];
    
    const alumno = {
        nombre: "Juanan",
        edad: "25",
        ciclo: 2,
        tutor: tutor,
        asignaturas: [asignaturas[2], asignaturas[3]],
        notaMedia: [7,8]
    };

    let html = document.getElementsByTagName("body")[0];
    let table = document.createElement("table");
    table.setAttribute("class","estilo");
    let tr = createTableNodeRow("th","Datos del alumno");
    table.appendChild(tr);
    html.appendChild(table);

    for (const datos in alumno) {
        let row = createTableNodeRow("td", datos);
        let info;
        
        if (typeof(alumno[datos]) === "object") {
            for (const element in alumno[datos]) {
                if (typeof(alumno[datos][element]) === "object") {
                    let nombre = Object.keys(alumno[datos][element])[0]
                    info = alumno[datos][element][nombre];
                }else{
                    info = alumno[datos][element];
                }
                addCell("td",info, row);
            }
        }else{
            info = alumno[datos];
            addCell("td",info,row);
        }
        table.appendChild(row);
    }
    tutor.mostrar();
}


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