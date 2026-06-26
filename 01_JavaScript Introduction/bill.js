// ============================================
// bill.js - Shopping Bill Calculator
// This program calculates discounts on bills
// and product prices
// ============================================

// Set the customer's total bill amount
let billAmount = 6000;

// Delivery charge starts at 0 (free delivery by default)
let deliveryCharge = 0;

// Check if the bill is 5000 or more to apply a discount
if (billAmount >= 5000) {
    // Discount percentage is 10%
    let discount = 10;

    // Calculate the discount amount (10% of billAmount)
    // Example: 6000 * 10 / 100 = 600
    billAmount = billAmount * discount / 100;

    // Subtract the discount from the bill to get final amount
    let finalAmount = billAmount - discount;

    // Print the discounted bill amount to the console
    console.log(billAmount);
}

// ---- Separate product price discount ----

// Original price of the product
let price = 3000;

// Calculate 10% discount on the price
// Example: 10 * 3000 / 100 = 300
let discount = 10 * price / 100;

// Subtract discount from original price to get discounted price
// Example: 3000 - 300 = 2700
price = price - discount;

// Print the final discounted price
console.log(price);