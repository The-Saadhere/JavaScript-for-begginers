let guess = prompt("Guess a Number between 1 10 10");
let random = Math.floor(Math.random() * 10) + 1;
if (guess == random) {
    alert("You Guess a Right Number")
}
else {
    alert("You Guess Wrong Number Answer is " + random)
}
