# JavaScript Basics – Beginner's Guide
**By SaadkamalShaikh**

---

## What Is This Project?

This project is a beginner-friendly introduction to **JavaScript variables and data types**. It covers the building blocks every JavaScript developer needs to know before writing real programs.

---

## How to Run It

1. Make sure both files are in the **same folder**:
   - `index.html`
   - `script.js`
2. Double-click `index.html` to open it in your browser.
3. Press **F12** (or right-click → Inspect) to open the **Developer Console**.
4. Click the **Console** tab — all output from `console.log()` will appear there.

---

## What You Will Learn

### 1. Declaring Variables

JavaScript has three ways to declare (create) a variable:

| Keyword | Can Change? | Scope |
|---------|-------------|-------|
| `var`   | ✅ Yes | Function-wide (old style, avoid) |
| `let`   | ✅ Yes | Block `{ }` only (recommended) |
| `const` | ❌ No (for primitives) | Block `{ }` only (recommended) |

```js
let age = 16;       // can be changed later
const name = "Saad"; // cannot be reassigned
var old = "avoid this"; // old way, has quirks
```

---

### 2. Data Types

Every value in JavaScript has a **type**. The main ones are:

| Type | Example | Description |
|------|---------|-------------|
| `number` | `10`, `5.5` | Whole or decimal numbers |
| `string` | `"Saad"` | Text inside quotes |
| `boolean` | `true`, `false` | Yes / No values |
| `null` | `null` | Intentionally empty |
| `undefined` | `undefined` | Declared but not given a value |
| `object` | `{ key: value }` | A collection of related data |

Use `typeof` to check the type of any variable:
```js
console.log(typeof 42);      // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true);    // "boolean"
console.log(typeof null);    // "object" ← famous JavaScript quirk!
```

---

### 3. console.log()

`console.log()` is your best friend for learning. It prints values to the browser console so you can see what's happening in your code.

```js
console.log("Hello World");   // prints: Hello World
console.log(10 + 5);          // prints: 15
console.log(typeof "Saad");   // prints: string
```

---

### 4. Math Operators

```js
let a = 10 + 5;   // Addition       → 15
let b = 10 - 3;   // Subtraction    → 7
let c = 10 * 2;   // Multiplication → 20
let d = 10 / 2;   // Division       → 5
let e = 10 % 3;   // Remainder      → 1
let f = 2 ** 8;   // Exponentiation → 256 (2 to the power of 8)
```

---

### 5. Block Scope with `let`

When you use `let` inside curly braces `{ }`, that variable only lives inside those braces. Outside, it doesn't exist (or refers to a different variable if one was declared before).

```js
let x = 100;

{
    let x = 500; // This is a DIFFERENT 'x', only inside this block
    console.log(x); // 500
}

console.log(x); // 100 — the original 'x' is unchanged
```

---

### 6. Objects

An object groups related data together using **key: value** pairs.

```js
const person = {
    name: "Saad",
    age: 16,
    profession: "Web Developer"
};

console.log(person.name); // "Saad"

// You can add or update properties anytime (even on const objects):
person.profession = "Software Engineer";
person.salary = "10 Crore";
```

> **Note:** `const` on an object means you can't *replace* the whole object, but you *can* change its properties.

---

### 7. Common Mistakes to Avoid

**❌ Reassigning a `const` variable:**
```js
const x = 10;
x = 20; // TypeError: Assignment to constant variable.
```

**❌ Using a variable that doesn't exist:**
```js
let square = 14;
square = square12; // ReferenceError: square12 is not defined
// ✅ Fix:
square = square * 12; // 168
```

**❌ Forgetting `let`/`const`/`var`:**
```js
myVar = 5; // Creates an accidental global variable — bad practice!
// ✅ Fix:
let myVar = 5;
```

---

## File Structure

```
your-folder/
├── index.html   → Opens in browser, loads the script
└── script.js    → All your JavaScript code lives here
```

---

## Tips for Beginners

- Always open the **Console (F12)** when testing JavaScript — errors show up there too.
- Use `let` and `const` — avoid `var`.
- Use `const` by default; switch to `let` only if you need to reassign the value.
- Use `console.log()` everywhere while learning — it's how you "see" your code run.
- Read error messages carefully — they tell you exactly what went wrong and on which line.

---

Happy Coding! 🚀