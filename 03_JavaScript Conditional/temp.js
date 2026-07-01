// This function takes an array of numbers (nums) and a value (val).
// It removes every occurrence of "val" from the array,
// and replaces each removed item with "_" at the end of the array.
function removeValue(nums, val) {
    let newNum = [];   // will hold the numbers that are NOT equal to "val"
    let under = 0;      // counts how many times "val" was found (removed)

    // Loop through every number in the original array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            // Keep the number if it's different from "val"
            newNum.push(nums[i]);
        } else {
            // Otherwise, count it as removed
            under += 1;
        }
    }

    // Add one "_" for every removed number
    for (let i = 0; i < under; i++) {
        newNum.push("_");
    }

    return newNum;
}

let a = [3, 2, 2, 3];

// Remove every "3" from the array and replace it with "_"
console.log(removeValue(a, 3)); // Expected output: [2, 2, '_', '_']