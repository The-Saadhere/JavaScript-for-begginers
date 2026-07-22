let fullMarks = 500;
let marks = 315;

let percentage = (marks / fullMarks) * 100;
console.log("Your Percentage is: " + percentage.toFixed(2) + "%");

if (percentage >= 90) {
    console.log("Grade: A+");
    console.log("Remarks: Outstanding Performance!");
}
else if (percentage >= 80) {
    console.log("Grade: A");
    console.log("Remarks: Excellent Work!");
}
else if (percentage >= 70) {
    console.log("Grade: B");
    console.log("Remarks: Good Job, Keep Improving!");
}
else if (percentage >= 60) {
    console.log("Grade: C");
    console.log("Remarks: Satisfactory, Needs More Effort.");
}
else if (percentage >= 50) {
    console.log("Grade: D");
    console.log("Remarks: Pass, But You Should Work Harder.");
}
else {
    console.log("Grade: F");
    console.log("Remarks: Unfortunately, You Have Failed.");
}