# JavaScript Beginner Practice Files

A set of beginner JavaScript exercises covering variables, conditions, browser interaction, and basic HTML structure.

---

## 📁 File Overview

| File | Description |
|------|-------------|
| `bill.js` | Bill discount calculator |
| `challenge.js` | Movie ticket price calculator |
| `index.html` | Basic HTML page structure |
| `new.js` | Console log practice |
| `script.js` | Browser interaction examples |

---

## 📄 File Details

### `bill.js` — Bill Discount Calculator
Calculates discounts on a shopping bill and a product price.

**Concepts covered:**
- Variables (`let`)
- `if` conditions
- Arithmetic operations (multiply, divide, subtract)
- `console.log()`

**How it works:**
- If the bill is Rs 5000 or more, a 10% discount is applied
- A separate product (Rs 3000) also gets a 10% discount
- Final prices are printed to the console

---

### `challenge.js` — Movie Ticket Price Calculator
Determines the ticket price based on the visitor's age, with an extra discount for students.

**Concepts covered:**
- `if / else if` conditions
- Logical operators (`&&` — means "AND")
- Boolean values (`true` / `false`)
- Variable declaration with `let`

**Ticket Pricing Rules:**

| Age Group | Price |
|-----------|-------|
| 0 – 5 years | Free (Rs 0) |
| 6 – 17 years | Rs 500 |
| 18 – 59 years | Rs 800 |
| 60+ years | Rs 300 |

**Student Discount:** Students aged 18–25 get Rs 160 off their ticket.

> ⚠️ **Bug Note:** `isStudent` is declared without `let`. Always use `let`, `const`, or `var` to declare variables properly.

---

### `index.html` — Basic HTML Page
A simple webpage with a container box and a submit button, linked to `script.js`.

**Concepts covered:**
- HTML document structure (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`)
- `<div>` for grouping elements
- `<button>` element
- Linking an external JavaScript file with `<script src="">`

**How to run:** Open `index.html` in any web browser.

---

### `new.js` — Console Log Practice
Three basic `console.log()` statements to get familiar with printing output.

**Concepts covered:**
- `console.log()` — the most used debugging tool in JavaScript

**How to run:** Open browser → right-click → Inspect → Console tab, or run with Node.js:
```bash
node new.js
```

---

### `script.js` — Browser Interaction
Demonstrates JavaScript's built-in browser dialog functions and how to manipulate the page.

**Concepts covered:**
- `alert()` — shows a popup message
- `prompt()` — asks the user for input
- `confirm()` — asks the user a yes/no question
- `document.title` — changes the browser tab title
- `document.body.style.backgroundColor` — changes the page background color

**How to run:** This file is linked in `index.html`. Open `index.html` in a browser and the script runs automatically.

---

## 🚀 How to Get Started

1. Open the folder in **VS Code** (or any code editor)
2. Open `index.html` in your browser to run `script.js`
3. Open browser **DevTools** (press `F12`) → go to the **Console** tab to see `console.log()` output
4. To run `.js` files directly, install [Node.js](https://nodejs.org/) and run:
   ```bash
   node bill.js
   node challenge.js
   node new.js
   ```

---

## 💡 Key Concepts for Beginners

| Concept | Example |
|---------|---------|
| Variable | `let price = 3000;` |
| Condition | `if (age >= 18) { ... }` |
| Print output | `console.log("Hello")` |
| User input | `prompt("Enter name")` |
| Arithmetic | `price * 10 / 100` |
| Boolean | `true` / `false` |

---

*Made for JavaScript beginners — keep practicing!* 🎯