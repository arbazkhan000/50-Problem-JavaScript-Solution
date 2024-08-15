// first Method
// let number = 5;

// if (number % 2) {
//     console.log("The number is odd");
// } else {
//     console.log("The number is even");
// }

// Second Method

// let number = prompt("Enter Number is Even or Odd ");

function oddEven(number) {
    if (number % 2 == 0) {
        return "The number is Even";
    } else {
        return "The number is Odd";
    }
}

console.log(oddEven(21));
