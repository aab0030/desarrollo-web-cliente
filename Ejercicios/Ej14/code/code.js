var colores = ["red", "yellow", "green", "white", "blue", "brown", "pink", "black"];
var color = "";
var num = 0;
var cont = 0;
var aleatorio = 0;

while (num < 1 || num > 5) {
    num = (Number)(prompt("Introduce un número de franjas para mi bandera (entre 1 y 5): "));
}

document.open();
document.write("<table><tr>");
while (cont < num) {
    aleatorio = parseInt(Math.random()*5);
    color = colores[aleatorio];
    writeColor(color);
    cont++;
}
document.write("</tr></table>");
document.close();

function writeColor(color){
    document.write("<td bgcolor = ",color," width = 100px height = 100px></td>");
}