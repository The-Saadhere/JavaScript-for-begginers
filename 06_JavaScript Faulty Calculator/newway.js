let a = 120;
let b = 129;
let c = Math.random();
let addition = a + b;
let subtraction = a - b;
let mutliply = a * b;
let divide = a / b;
if (c <= 0.3) {
    addition = a - b;
    subtraction = a * b;
    mutliply = a / b;
    divide = a ** b;
}

console.log("Addition :", addition);
console.log("Subtraction :", subtraction);
console.log("Multiplication :", mutliply);
console.log("Division :", divide);