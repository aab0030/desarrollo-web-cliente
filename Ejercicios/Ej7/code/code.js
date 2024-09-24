numbers = [1,2,3,4,5,6];

function getNumbers(array){
    let counter = 1;
    numbers[0] = array[0];
    while (counter < array.length){
        numbers[counter] = array[counter-1] + array[counter];
        counter++;
    }
    return numbers;
}
console.log(getNumbers(numbers));