let colores = ['grey','red','blue', 'green','yellow','black'];

function ordenarColores(palabras){
    let count = 0;
    let count2 = 0;
    let res = [];
    let countRes = 0;
    let añadido = false;
    while (palabras[count] != null){
        while (colores[count2] != null && !añadido){
            if(palabras[count] == colores[count2]){
                res[countRes] = palabras[count];
                countRes++;
                añadido = true;
            }
            count2++;
        }
        añadido = false;
        count2 = 0;
        count++;
    }
    count = 0;
    count2 = 0;
    añadido = true;
    while (palabras[count] != null){
        while (colores[count2] != null && añadido){
            if(palabras[count] == colores[count2]){
                añadido = false;
            }
            count2++;
        }
        if (añadido){
            res[countRes] = palabras[count];
            countRes++;
        }
        añadido = true;
        count2 = 0;
        count++;
    }
    return res;
}
console.log(ordenarColores(["hola","adios","grey","blue"]));