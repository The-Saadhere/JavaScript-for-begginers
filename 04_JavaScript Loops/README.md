# JavaScript Loops Tutorial

`index.js` is a small practice file that demonstrates the different types of loops in JavaScript, plus a simple function example.

## What's inside

### 1. `for` loop
```js
for (let i = 1; i <= 100; i++) { ... }
```
Prints numbers from 1 to 100. Best used when you know exactly how many times you want to loop.

### 2. `for...in` loop
Loops over the **keys** (property names) of an object — here, `name`, `Work`, and `Salary`.

### 3. `for...of` loop
Loops over the **values** of an iterable (like a string or array) — here, each character of the string `"Saadkamalshaikh"`.

### 4. `while` loop
```js
while (w <= 11) { ... }
```
Checks the condition **before** each run. Keeps going as long as the condition stays true.

### 5. `do...while` loop
```js
do { ... } while (q < 100);
```
Checks the condition **after** running the code once. So the loop body always runs at least one time, even if the condition is already false.
⚠️ In this file, `q` starts at `1000`, so `q < 100` is false immediately — the loop only runs once (prints `1000`) and then stops. This is expected `do...while` behavior, just worth knowing since it can surprise beginners.

### 6. `numb(arr, target)` function
Checks pairs of **neighboring** numbers in an array (`arr[i]` and `arr[i + 1]`) to see if they add up to `target`, and returns their indexes if they do.
⚠️ Note: it only compares numbers that sit next to each other, not every possible pair, so with `arr = [3, 2, 3]` and `target = 6`, it returns `undefined` since no two neighboring numbers add up to 6.

## Run it
```bash
node index.js
```

## Changes made
- Added beginner-friendly comments explaining what each loop does and why.
- Fixed a spelling/formatting issue: `"webdeveloper"` → `"Web Developer"`.
- Added notes (in comments and here) explaining two easy-to-miss quirks: the `do...while` loop only running once, and the `numb` function only checking neighboring array elements.
- No logic was changed — the output is identical to the original code.