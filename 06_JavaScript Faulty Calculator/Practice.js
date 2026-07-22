let fullMarks = 500;
let marks = 385;
let percentage =(marks / fullMarks) * 100;
console.log("Your Percentege is :" + percentage);
if (percentage >= 90){
    console.log("Grade A+")
}
else if(percentage >= 80 && percentage <= 89){
     console.log("Grade A")
}
else if(percentage >= 70 && percentage <= 79){
     console.log("Grade B")
}
else if(percentage >= 60 && percentage <= 69){
     console.log("Grade C")
}
else if(percentage >= 50 && percentage <= 59){
     console.log("Grade D")
}
else{
         console.log("Fail")
}