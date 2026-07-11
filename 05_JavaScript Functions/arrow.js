// Arrow function with one parameter and a single expression.
// When a function has one expression, the result is returned automatically.
const square = a => a * a;
console.log(square(10)); // prints 100

// Arrow function with two parameters.
const multiply = (a, b) => a * b;
console.log(multiply(5, 7)); // prints 35

// Arrow function with a block body.
// We use this form when we need more than one line of code.
const num = (a) => {
    if (a % 2 === 0) {
        console.log("isEven", a);
        return a; // return the even number
    } else {
        console.log("isOdd", a);
        return a; // return the odd number
    }
};

console.log(num(11)); // prints 11 and logs that it is odd
