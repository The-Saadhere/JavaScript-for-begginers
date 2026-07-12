function faultyCalculator(a, b) {
    let c = Math.random(); // Random number from 0 to 1

    let addition = a + b;
    let subtraction = a - b;
    let multiplication = a * b;
    let division = a / b;

    // Fault injection: 30% chance of faulty results
    if (c <= 0.3) {
        addition = a - b;
        subtraction = a * b;
        multiplication = a / b;
        division = a ** b;
    }

    // Return all operations in an object
    return {
        addition,
        subtraction,
        multiplication,
        division,
        randomChance: c.toFixed(2)
    };
}

// Call the function
let result = faultyCalculator(120, 129);

// Display the results
console.log("Random Chance:", result.randomChance);
console.log("Addition:", result.addition);
console.log("Subtraction:", result.subtraction);
console.log("Multiplication:", result.multiplication);
console.log("Division:", result.division);
