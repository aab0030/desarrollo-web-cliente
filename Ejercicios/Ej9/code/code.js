var n = 0;
var count = 1;
var count2 = 1;
var res = 0;
var linea = "";
var mult = 1;

while (n <= 2){
    n = (Number(prompt("Introduce un numero mayor a 2: ")));
}
matriz = [[n],[n]];

while(count <= n){
    while(count2 <= n){
        
        res = n * mult;
        
        if (res < 10)
            linea += "0" + res + " ";
        else
            linea += res + " ";
        count2++;
        mult++;
    }
    console.log(linea);
    linea = "";
    res = 0;
    count2 = 1;
    count++;
}