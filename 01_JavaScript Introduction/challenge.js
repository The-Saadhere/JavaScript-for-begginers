let age = 20;
isStudent =true;
let ticketPrice = 0;
if (age <= 5){
    ticketPrice = 0
}
else if(age >= 6 && age <= 17){
    ticketPrice = 500
}
else if(age >= 18 && age < 60){
    ticketPrice = 800;
}
else if(age >= 60){
    console.log("Ticket Price Rs 300");
}
if(isStudent === true && age >= 18 && age <= 25){
    ticketPrice = ticketPrice - 160;
}
    console.log("Final Ticket Price: " + ticketPrice);