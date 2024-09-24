var n = 0;
var counter = 0;
var res = 0;

while (n <= 0){
    n = prompt("Introduce un número mayor a 0.");
}

console.log("Divisores: ")
while (counter <= n){
    if (n % counter == 0) {
        res += counter * counter;
        console.log(counter + "\n");
    }
    counter++;
}
console.log("Suma de los cuadrados: "+res);

if (Math.sqrt(res) % 1 === 0) console.log("Es un numero cuadrado.");
else console.log("No es un numero cuadrado.");