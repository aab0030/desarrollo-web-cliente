var arrayRes = [];
count = 0;
count2 = 0;
countEncontrados = 0;
encontrado = false;

function getDifferent(array1,array2){
    while (array1[count] != null){
        while (array2[count2] && !encontrado){
            if(array1[count] == array2[count2])
                encontrado = true;
            count2++;
        }
        count2 = 0;
        while (arrayRes[count2] != null && !encontrado){
            if(array1[count] == arrayRes[count2])
                encontrado = true;
            count2++;
        }
        if(!encontrado){
            arrayRes[countEncontrados] = array1[count];
            countEncontrados++;
        }else
            encontrado = false;
        count2 = 0;
        count++;
    }

    count = 0;
    count2 = 0;
    encontrado = false;

    while (array2[count] != null){
        while (array1[count2] && !encontrado){
            if(array2[count] == array1[count2])
                encontrado = true;
            count2++;
        }
        count2 = 0;
        while (arrayRes[count2] != null && !encontrado){
            if(array2[count] == arrayRes[count2])
                encontrado = true;
            count2++;
        }
        if(!encontrado){
            arrayRes[countEncontrados] = array2[count];
            countEncontrados++;
        }else
            encontrado = false;
        count2 = 0;
        count++;
    }

    return arrayRes;
}
console.log(getDifferent([1,2,2,3,3,4,4],[5,5,4,6,6]));