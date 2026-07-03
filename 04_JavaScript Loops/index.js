console.log("I am a Tutorial on Loops");

let a = 1;
console.log(a);       // prints 1
console.log(a + 1);   // prints 2 (a is still 1, this just adds 1 for display)
console.log(a + 2);   // prints 3 (a is still 1, this just adds 2 for display)

// --- for loop ---
// Runs from i = 1 up to (and including) 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// --- for...in loop ---
// Used to loop over the KEYS (property names) of an object
let obj = {
    name: "Saad",
    Work: "Web Developer", // fixed spacing/casing: "webdeveloper" -> "Web Developer"
    Salary: 0
};

for (const key in obj) {
    const element = obj[key]; // the value that belongs to this key
    console.log(key);         // prints only the key name (name, Work, Salary)
}

// --- for...of loop ---
// Used to loop over the VALUES of an iterable, like a string or array.
// Here it loops over each character of the string.
for (const c of "Saadkamalshaikh") {
    console.log(c);
}

// --- while loop ---
// Keeps running as long as the condition (w <= 11) is true
let w = 0;
while (w <= 11) {
    console.log(w);
    w++;
}

// --- do...while loop ---
// Runs the code inside "do" FIRST, and only checks the condition afterward.
// That means it always runs at least once, even if the condition is false.
// Here, q starts at 1000, so "q < 100" is false right away,
// meaning the loop body runs exactly one time (prints 1000) and then stops.
let q = 1000;
do {
    console.log(q);
    q++;
} while (q < 100);

// --- Function example ---
// Checks pairs of NEXT-TO-EACH-OTHER numbers in the array (arr[i] and arr[i+1]).
// If their sum equals "target", it returns their indexes.
// Note: this only checks neighboring numbers, not every possible pair,
// so it won't find a match unless two numbers that are next to each other add up to target.
function numb(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let k = 1 + i; // index of the next number
        if ((arr[i] + arr[k]) === target) {
            return [i, k];
        }
    }
}

let arr = [3, 2, 3];

console.log(numb(arr, 6)); // logs undefined, since no two neighboring numbers add up to 6