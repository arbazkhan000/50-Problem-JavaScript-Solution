// write a funtion to take a number in array return new array with only even number

let aray = [12, 3, , 34, 454, , 4665];

function filterEvenNumber(aray) {
    return aray.filter((num) => num % 2 != 0);
}

console.log(filterEvenNumber(aray));
