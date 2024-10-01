let brutos = [1000, 1300, 1500, 1700, 2000, 2200, 2800, 3000];
let neto = [];
let fiscalAlto = [];

brutos.forEach((elemento) => {
    neto.push(elemento*0.85);
    if(elemento*0.85 > 1935)
        fiscalAlto.push(elemento*0.85);
    console.log(elemento);
});
console.log(fiscalAlto);


