// ============================================================
// JAVASCRIPT BASICS - Learning Variables, Data Types & Objects
// Author: SaadkamalShaikh
// ============================================================


// ─── NUMBERS ─────────────────────────────────────────────────
// We declare a variable 'a' using 'let' and assign it the value 10.
// 'let' means we can change this value later.
let a = 10;

// Now we update 'a' by adding 100 to it. So a becomes 10 + 100 = 110.
a = a + 100;

// 'b' is a decimal (floating-point) number.
let b = 5.5;


// ─── STRINGS ─────────────────────────────────────────────────
// A string is text wrapped in quotes. Here 'c' holds the text "Saad".
let c = "Saad";


// ─── BOOLEAN ─────────────────────────────────────────────────
// A boolean can only be 'true' or 'false'. Think of it as yes/no.
let d = true;


// ─── VAR (older way to declare variables) ────────────────────
// 'var' is an older keyword like 'let', but it behaves differently
// in some cases (it ignores block scope). Use 'let' or 'const' instead.
var _saad = "This is Hardwork. You Know How Hard It Is?";


// ─── CONSOLE.LOG ─────────────────────────────────────────────
// console.log() prints output to the browser console (press F12 to open it).
// When you mix numbers and strings, JavaScript converts everything to a string.
// Output: "125.515Saad This is Hardwork. You Know How Hard It Is?"
console.log(a + b + 15 + c + _saad);

// typeof tells us the data type of a variable.
// Output: "number number string boolean"
console.log(typeof a, typeof b, typeof c, typeof d);


// ─── CONST (constant — value cannot be reassigned) ───────────
// Uncommenting the code below would cause an ERROR because
// you cannot reassign a 'const' variable after it's set.
// const a1 = 12;
// a1 = a1 + 1;   // ❌ This will throw: TypeError: Assignment to constant variable.
// console.log(a1);


// ─── EXPONENTIATION OPERATOR (**) ────────────────────────────
// The ** operator means "to the power of".
// 12 ** 4 means 12 × 12 × 12 × 12 = 20736
let abc = 12;
abc = abc ** 4;
console.log(abc); // Output: 20736


// ─── BLOCK SCOPE ─────────────────────────────────────────────
// Variables declared with 'let' inside { } curly braces only exist inside them.
// This is called "block scope".
{
    let a = 500; // This 'a' is a DIFFERENT variable, only alive inside this block.
    console.log(a); // Output: 500
}

// Back outside the block, 'a' is still 110 (from the top).
console.log(a); // Output: 110


// ─── MORE VARIABLES WITH DIFFERENT DATA TYPES ────────────────
let u = "SaadkamalShaikh"; // string
let k = 30;                  // number (integer)
let m = 12.1;                // number (decimal / float)
const n = true;              // boolean (constant)
let v = null;                // null — intentionally empty / no value
let r = undefined;           // undefined — variable declared but not assigned
let x = "%^";                // string (can contain special characters)

// Printing all the values in one line:
console.log(u, k, m, n, v, r, x);

// Printing their data types:
// Note: typeof null returns "object" — this is a known quirk in JavaScript!
console.log(typeof u, typeof k, typeof m, typeof n, typeof v, typeof r, typeof x);


// ─── OBJECTS ─────────────────────────────────────────────────
// An object stores related data as key-value pairs (like a dictionary).
// Keys are strings, values can be any data type.
let o = {
    "SaadkamalShaikh": "Web Developer",
    "Job Role": 100000,
    "Is Good": true
};
console.log(o); // Prints the whole object

// You can add new properties to an object after it's created:
o.salary = "100 Lakh";
console.log(o);

// You can also UPDATE an existing property:
o.salary = "1400 Lakh";
console.log(o);


// ─── CONST OBJECTS ───────────────────────────────────────────
// Even with 'const', you CAN change the properties inside an object.
// What you CANNOT do is replace the whole object with a new one.
const person = {
    "name": "SaadkamalShaikh",
    "age": 16,
    "profession": "Web Developer"
};
console.log(person);

// Updating an existing property:
person.profession = "Software Engineer";
console.log(person);

// Adding a new property:
person.salary = "10 Crore";
console.log(person);


// ─── ANOTHER OBJECT EXAMPLE ──────────────────────────────────
// A simple English-to-Urdu/meaning dictionary object:
const mean = {
    "dog": "Kuta",
    "human": "Insaan",
    "AI": "Job Khatrey Mein",
    "cat": "Billi",
    "genius": "Samajhdar ya 120+ IQ"
};
console.log(mean);


// ─── BUG FIX ─────────────────────────────────────────────────
// The original code had: square = square12;
// 'square12' is not defined anywhere — that would cause a ReferenceError.
// The likely intention was: square = square * 12 (multiply by 12).
let square = 14;
square = square * 12; // 14 × 12 = 168
console.log(square); // Output: 168