let a = prompt("Enter First Number");
let c = prompt("Enter Operation");
let b = prompt("Enter Second Number");
let obj = {
    "+": "-",
    "-": "*",
    "*": "/",
    "/": "+"
}
let random = Math.random
if (random <= 0.3) {
    c = obj[c]
    console.log(`The result is ${a} ${c} ${b}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
else {
    console.log(`The result is ${a} ${c} ${b}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
