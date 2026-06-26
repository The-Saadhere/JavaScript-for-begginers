// ============================================
// challenge.js - Movie Ticket Price Calculator
// This program calculates ticket prices based
// on age and student status
// ============================================

// Set the visitor's age
let age = 20;

// Set whether the person is a student (true = yes, false = no)
// Note: 'let' is missing here — best practice is to write: let isStudent = true;
isStudent = true;

// Start with ticket price as 0, we'll update it based on age
let ticketPrice = 0;

// ---- Age-based ticket pricing ----

// Children aged 5 or below get free entry
if (age <= 5) {
    ticketPrice = 0;
}
// Kids aged 6 to 17 pay Rs 500
else if (age >= 6 && age <= 17) {
    ticketPrice = 500;
}
// Adults aged 18 to 59 pay Rs 800
else if (age >= 18 && age < 60) {
    ticketPrice = 800;
}
// Senior citizens aged 60 and above pay Rs 300
else if (age >= 60) {
    console.log("Ticket Price Rs 300");
}

// ---- Student discount ----

// If the person is a student AND between 18–25 years old,
// they get a Rs 160 discount on their ticket
if (isStudent === true && age >= 18 && age <= 25) {
    ticketPrice = ticketPrice - 160; // Apply student discount
}

// Print the final ticket price to the console
console.log("Final Ticket Price: " + ticketPrice);