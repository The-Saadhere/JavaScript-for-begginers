# JavaScript Practice Files

This repo has two small JavaScript files for practicing basic JS concepts.

## 1. `index.js`

Covers:
- **Variables** (`let`) and basic **math operators**: `+`, `-`, `*`, `/`, `%` (remainder), `**` (power)
- **Compound assignment**: `age += garce` is short for `age = age + garce`
- **Comparison and logical operators**: `>`, `>=`, `<=`, `==`, `&&`
- **Conditionals**: `if`, `else if`, `else`
- **Comments**:
  - `// single line comment`
  - `/* multi-line comment */`

Run it with:
```bash
node index.js
```

## 2. `temp.js`

Contains a function `removeValue(nums, val)` that:
1. Loops through an array `nums`.
2. Keeps every number that is **not** equal to `val`.
3. Counts how many numbers were removed.
4. Adds that many `"_"` (underscore) placeholders to the end of the result.

Example:
```js
removeValue([3, 2, 2, 3], 3);
// Result: [2, 2, '_', '_']
// The two 3's are removed and replaced with two underscores at the end.
```

Run it with:
```bash
node temp.js
```

## Notes on changes made

- Added beginner-friendly comments explaining what each line/block does.
- Fixed a couple of spelling issues in printed messages (e.g. "commnet" → "comment", "Kuta" → "a kid").
- Renamed the function in `temp.js` from `nameq` to `removeValue`, since the original name didn't describe what the function does — a small style improvement, not a bug fix.
- Both files were tested with `node` and produce the same working output as before.