// calculate the fectorila number

// 5 fectorial number = 5,4,3,2,1


function factorial(number) {
    if (number === 0 || number == 1) {
        return 1;
    }
    let fect = 1;
    for (let i = 2; i <= number; i++) {
        fect *= i;
    }
    return fect;
}
console.log(factorial(5));
