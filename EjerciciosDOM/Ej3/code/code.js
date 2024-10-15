window.onload = main;

let num;

function main() {
    num = document.getElementsByTagName("div")[0];
    console.log(num);
    
}

function sumar() {
    let suma = Number(num.innerText) + 1;

    num.innerText = suma;
}

function restar() {
    let resta = Number(num.innerText) - 1;

    num.innerText = resta;
}