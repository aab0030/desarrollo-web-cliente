var n = 0;
var count = 0;
var count2 = 0;
var fila = [];
while (n <= 2){
    n = 3//(Number(prompt("Introduce un numero mayor a 2: ")));
}
var matriz = [[]];
var matrizRes = [];

while (count < n * n) {
    matriz[count2].push((count + 1));
    if ((count + 1) % n == 0 && (count + 1) != n * n){
        count2++;
        matriz.push([]);
    }
    
    count++;
}
console.log(matriz);

matriz = matriz.map(ele => {
    return ele.map(element => {
        return element*n;
    });
});
console.log(matriz);

for (let i = 0; i < n; i++){
    
}

// while(count <= n){
//     while(count2 <= n){
        
//         res = n * mult;
        
//         if (res < 10)
//             linea += "0" + res + " ";
//         else
//             linea += res + " ";
//         count2++;
//         mult++;
//     }
//     console.log(linea);
//     linea = "";
//     res = 0;
//     count2 = 1;
//     count++;
// }