function countBy(x, y){
    if (x < 0 || y < 0) return [];

    console.log(getMult(x,y));
}

function getMult(n1, n2){
    let count = 1;
    let res = [];
    while (count <= n2){
        res = count * n1;
    }
}