// Print a simple text message to the console
console.log("Hello World");

// Declare two variables and store numbers in them
let age = 9;
let garce = 21;

// Add "garce" to "age" and store the result back into "age"
// (this is the same as writing: age = age + garce)
age += garce;
console.log(age); // 30

// Basic math operations using the two numbers
console.log(age - garce);  // Subtraction
console.log(age * garce);  // Multiplication
console.log(age % garce);  // Modulus (remainder after division)
console.log(age ** garce); // Exponent (age to the power of garce)
console.log(age / garce);  // Division

console.log(age + garce);  // Addition
console.log(age + garce);  // Same addition printed again

// Check if the sum of age and garce is greater than 18
if ((age + garce) > 18) {
    console.log("You can Drive");
} else {
    console.log("You cannot Drive");
}

let a = 5;

// The lines below are commented out, so they do NOT run.
// a = a == 18;
// console.log(a)

/*
This is a multi-line comment.
Anything written between the comment start and end symbols is ignored by JavaScript.
Useful for writing longer notes or explanations.
*/

// This is a single-line comment
if (a >= 18) {
    console.log("Now you are Adult");
} else if (a == 0) {
    console.log("Are You Kidding");
} else if (a <= 10) {
    console.log("Are you a kid"); // fixed spelling: "Kuta" -> "a kid"
} else {
    console.log("You are a kid");
}

let umar = 153;

// Check if "umar" (age) is between 10 and 20 (inclusive)
if (umar >= 10 && umar <= 20) {
    console.log("Tum 10 se 20 ke beech mein ho"); // fixed spelling: "Beec me hi" -> "beech mein ho"
} else {
    console.log("Tum 10 se chhote ya 20 se bade ho"); // fixed spelling: "choty ya bary" -> "chhote ya bade"
}