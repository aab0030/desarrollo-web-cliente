function ejercicio1() {
    let euros = -1;
    let valorDolar= 1.0965;

    while (euros < 0) {
        euros = Number(prompt("Introduce una cantidad de euros (Positiva): "));
    }
    alert(euros + " equivalen a " + (euros*valorDolar));
}  

function ejercicio2() {
    let nota = 0, i = 1;
    let suspensos = 0, aprobados = 0, notables = 0, sobresalientes = 0;

    while(i <= 10) {
        nota = Math.trunc(Number(prompt("Nota "+i+": ")));
        if (nota < 0 || nota > 10 || isNaN(nota)) {
            continue;
        }
        if (nota < 5) 
            suspensos++;
        else if (nota < 7)
            aprobados++;
        else if (nota < 9) 
            notables++;
        else 
            sobresalientes++;
        i++;
    }
    alert("Suspensos: "+suspensos+" Aprobados: "
        +aprobados+" Notables: "+notables+" Sobresalientes: "+sobresalientes);
}

function ejercicio3() {
    let num = 0;
    let array = [];

    //Apartado A
    while (num >= 0 || isNaN(num)) {
        num = Number(prompt("Introduce numero: "));
        if (num >= 0){
            array.push(num);
        }
    }

    //Apartado B
    let linea = "";

    array.forEach(element => {
        linea += element + " "; 
    });
    console.log(linea);

    //Apartado C
    let sumaRes = 0;

    array.forEach(element => {
        sumaRes += element;
    });
    console.log(sumaRes);
    //Apartado D
    do{
        num = Math.trunc(Number(prompt("Introduce un numero entero positivo: ")));
        if (num % Math.trunc(num) != 0){
            num = -1;
        }
    } while (num < 0 || isNaN(num));

    //Apartado E
    if (array.includes(num)) {
        console.log("Primera aparición: "+ Math.trunc(linea.indexOf(num)/2));
        console.log("Última aparición: "+Math.trunc(linea.lastIndexOf(num)/2));
    }else
        console.log("El numero no está en el array");
}

function ejercicio4() {
    let matriz = [[],[],[]];

    //Apartado A
    matriz.forEach(element => {
        for (let i = 0; i < matriz.length; i++) {
            element.push(Math.trunc(Math.random()*19+2));
        }
    });

    //Apartado B
    let linea = "";

    matriz.forEach(element => {
        element.forEach(elemento => {
            if (elemento < 10)
                linea += "0" + elemento + " "; 
            else
                linea += elemento + " ";
        });
        console.log(linea);
        linea = "";
    });

    //Apartado C
    let sumaRes = 0;
    matriz.forEach(element => {
        element.forEach(elemento => {
            sumaRes += elemento;
        });
    });
    console.log("Suma de los valores: "+sumaRes);
    
    //Apartado D
    let copia = [[],[],[]];
    let i = 0;

    matriz.forEach(element => {
        element.forEach(elemento => {
            if (elemento > 10)
                copia[i].push(9);
            else
                copia[i].push(elemento);
        });
        i++;
    });

    linea = "";

    copia.forEach(element => {
        element.forEach(elemento => {
            if (elemento < 10)
                linea += "0" + elemento + " "; 
            else
                linea += elemento + " ";
        });
        console.log(linea);
        linea = "";
    });

    //Apartado E
    let num = 0;
    while (isNaN(num) || num < 1 || num >3 ) {
        num = Number(prompt("Introduce un numero entre 1 y 3: "));
    }

    [matriz[num]] = [copia[num]];

    matriz.forEach(element => {
        element.forEach(elemento => {
            if (elemento < 10)
                linea += "0" + elemento + " "; 
            else
                linea += elemento + " ";
        });
        console.log(linea);
        linea = "";
    });
}