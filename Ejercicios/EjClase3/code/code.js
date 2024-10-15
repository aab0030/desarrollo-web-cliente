function repeatInMatrix(matriz) {
    let num = [];
    matriz.forEach(element => {
        element.forEach( elemento => {
            if (num.includes(elemento)) {
                return true;
            }
            num.push(elemento);
        })
    });
    return false;
}

function anagrama(cadena1, cadena2) {
    if (cadena1.length != cadena2.length) {
        return false;
    }
    let troceado = [...cadena1];
    troceado.forEach(element => {
        if (!cadena2.includes(element)) {
            return false;
        }
    });
    return true;
}

//si no tienen el mismo tamaño => false

//ordeno ambas cadenas (sort) y comparo