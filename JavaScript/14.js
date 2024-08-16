// Generate random number useing Range

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomNumber(300, 100));
