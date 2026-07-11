// A normal function with one parameter named 'name'.
// This function prints a few messages using the name that is passed in.
function Nice(name) {
    console.log("Hey " + name + ", you are good.");
    console.log("Hey " + name + ", you are awesome.");
    console.log("Hey " + name + ", you are a web developer.");
    console.log("Hey " + name + ", your hair is nice.");
}

// Call the Nice function with two different names.
Nice("Jazib");
Nice("Saad");

// A function that accepts two values and prints them.
function sum(a, b) {
    console.log("Value of a:", a, "Value of b:", b);
}

sum(3, 10);

// A function with a default value for the third parameter.
// If no third value is sent, c becomes 100 automatically.
function ne(a, b, c = 100) {
    return a + b + c;
}

const result1 = ne(1, 5485);
const result2 = ne(500, 10);
const result3 = ne(5067, 10);
const result4 = ne(50, 870);
const result5 = ne(50, 130, 200000);

console.log("The sum of these numbers:", result1);
console.log("The sum of these numbers:", result2);
console.log("The sum of these numbers:", result3);
console.log("The sum of these numbers:", result4);
console.log("The sum of these numbers:", result5);

// An arrow function example.
// This is a shorter syntax for writing a function.
const func1 = (x) => {
    console.log("I am an arrow function. The value is:", x);
};

func1(45);
func1(576);
func1(200);
func1(16);
func1(12);