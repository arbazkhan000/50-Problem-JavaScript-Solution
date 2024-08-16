let element = [1, 2, 3, 4, 5, 6, 8, 7];

function dubbleNumber() {
    return element.map((elem) => {
        return elem * 2;
    });
}
console.log(dubbleNumber(element));
