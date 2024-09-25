var amigos = [];
var count = 0;
var amigosCount = 0;

function filtrar(arrayAmigos){
    while (arrayAmigos[count] != null){
        if (arrayAmigos[count].length == 4){
            amigos[amigosCount] = arrayAmigos[count];
            amigosCount++;
        }
        count++;
    }
    return amigos;
}
console.log(filtrar(["Enya","Estela","Ángel","Jose Antonio"]));