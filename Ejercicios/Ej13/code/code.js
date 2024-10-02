function siglo() {
    var año = (Number(prompt("Introduce un año: ")));
    var siglo = Math.trunc(año/100) + 1;
    alert(siglo);
}