var matriz = [];
function main(){
    tamMatriz(prompt("Introduce un tamaño para la matriz: "));
    numMayor();
}

function tamMatriz(tam){
    tam = Number(tam);
    let cont = 0;

    if (tam < 0 || isNaN(tam)){
        tamMatriz(prompt("Introduce un tamaño correcto: "));
    }
    while (cont < tam) {
        matriz.push([]);
        cont++;
    }
    generarMatriz(tam);
}

function generarMatriz(n){
    matriz.forEach(element => {
        for (let i = 0; i < matriz.length; i++) {
            element.push(parseInt(Math.random()*(n * 2 - n + 1) + n ));           
        }
    });
}

function numMayor() {
    let candidato = -Infinity;
    matriz.forEach(element => {
        for (let i = 0; i < matriz.length; i++) {
            if (candidato < element[i]) candidato = element[i];  
        }
    });
    console.log(candidato);
}

function mostrarMatriz() {
    matriz.forEach(element => {
        for (let i = 0; i < matriz.length; i++) {
            
        }
    });
}