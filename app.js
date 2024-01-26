// temperature
var temp = prompt("Please Enter Current Temperature in Celsius");
if (temp > 30) {
    alert("It's a hot day!")
}
else {
    alert("The weather is moderate")
}

// marksheet
function generate() {
let nAme, maths, english, computer, urdu, naam, totmarks, totalmarks, percent, percentage, grade;
nAme=(document.getElementById('name').value);
maths=parseFloat(document.getElementById('matmarks').value);
english=parseFloat(document.getElementById('engmarks').value);
computer=parseFloat(document.getElementById('compmarks').value);
urdu=parseFloat(document.getElementById('urmarks').value);

naam = document.getElementById("na-me");
totalmarks = document.getElementById("tmarks");
percent = document.getElementById("perc");
grade = document.getElementById("grd");

naam.innerHTML = nAme;
totmarks = maths+english+computer+urdu;
totalmarks.innerHTML = totmarks;
percentage = totmarks / 400 *100;
percent.innerHTML = percentage;

if (percentage >= 80) {
    grade.innerHTML="A+"
}
else if (80 > percentage >= 70) {
    grade.innerHTML="A"
}
else if (70 > percentage >= 60) {
    grade.innerHTML="B"
}
else if (60 > percentage >= 50) {
    grade.innerHTML="C"
}
else if (50 > percentage >= 40) {
    grade.innerHTML="D"
}
else {
    grade.innerHTML="Failed"
}
}
