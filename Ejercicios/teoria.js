let lista = [23,56,78,1,2];
let otra = [...lista];
otra[0] = 67;

//DECONSTRUCCION DE OBJETOS

//let ulti = "MARTILLO VAA!!";
//let luis = [...ulti];

function paco(){
    return [4,9]
}
let x,y;
[x,y] = paco();

let a,b,c,otros;
//permotar arrays
//[lista[1],lista[4]] = [lista[4],lista[1]];
//[a,b,c,...otros]= lista;

console.log(x);

//a = lista[0];
//b = lista[1];
//c = lista[2];

//let res = lista.concat(6,7,8,9);
//res = lista.concat(otra);

//meter
//res.push("flipao");
//res.unshift("por delante");

//sacar
//let ultimo = res.pop();
//ultimo = res.shift();
//console.log(ultimo);

//da la vuelta a los elementos
//res.reverse();

//let salida = res.join("-");

/*>Forma 1
function mayorEdad(edad) {
    return edad > 18;
}
*/
/* Forma 2
let ok = res.some(function(edad){
    return edad < 8;
    }     
);*/

//let ok = res.some((edad) => edad >=10);

/*
res.forEach((ele)=>{
    if (ele % 2 == 0) console.log("es par");
    else console.log("es impar");
    }
);

let otro = res.map((ele)=>{
    if (ele % 2 == 0) return ele;
    else return ele*2;
});*/

//Spread operator




//console.log(res);

//Métodos para cadenas

let texto = "hola";

texto.length // Propiedad que muestra la longitud de una cadena

texto.toUpperCase(); // Devuelve todo el string a mayúscula 
texto.toLowerCase(); // Devuelve todo el string a minúscula 

texto.charAt(pos); // Devuelve el caracter en la posición dada por parametros

texto.indexOf('a'); // Devuelve la posicion de la cadena pasada por parametros
texto.lastIndexOf('a'); // Devuelve la última posicion de la cadena pasada por parametros

texto.substring(3,5); // Devuelve un trozo del string, desde la primera posición hasta la ultimo sin incluirla

lista = texto.split('a'); // Devuelve un array con el texto dividido por el caracter pasado por parametros 