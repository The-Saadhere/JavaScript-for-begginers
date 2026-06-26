// ============================================
// script.js - Browser Interaction Examples
// This file shows how JavaScript can interact
// with the browser and the user
// ============================================

// alert() shows a popup message box in the browser
alert("hi saadkamal");

// console.log() prints a message in the browser's developer console
console.log("Hello world");

// prompt() shows a popup that asks the user to type something
// The value the user types is saved in the variable 'a'
var a = prompt("Enter your Name");

// Print the user's name to the console
console.log("your Name is " + a);

// confirm() shows a popup with OK and Cancel buttons
// If user clicks OK → istrue = true
// If user clicks Cancel → istrue = false
var istrue = confirm("Are you sure you want to leave page and Blast your computer");

// Check what the user chose
if (istrue) {
    // User clicked OK
    console.log("your Computer is Blast");
} else {
    // User clicked Cancel
    console.log("Your are good");
}

// Change the title of the browser tab
document.title = "Hey I am Good";

// Change the background color of the entire webpage to red
document.body.style.backgroundColor = "red";