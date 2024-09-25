function siglo() {
    var año = (Number(prompt("Introduce un año: ")));
    var siglo = Math.trunc(año/100) + Math.ceil(año%100/año);
    alert(siglo);
}