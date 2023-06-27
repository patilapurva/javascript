function fullName() {
    var fristName = Gayatri;
    var lastName = Dhakre;
    var collegeName = HVPM;
}
// fullName();
function personalDetails(firstName, lastName, collegeName) {
    console.log("my personal Details is");
    console.log("firstName :", firstName);
    console.log("lastName :", lastName);
    console.log("collegeName :", collegeName);

}
personalDetails("Gayatri", " Dhakre", "HVPM");
console.log("")


var virat = virat;
var anushka = anushka;
console.log("Before swap..", "virat", "anushka");

var temp = virat;
virat = anushka;
anushka = virat;
anushka = temp;

var anushka = anushka;
var virat = virat;
console.log("After swap..", "anushka", "virat");

var temp = anushka;
anushka = anushka;
virat = anushka;
virat = temp;

var num1 = 1000;
var num2 = 2000;
console.log("Before swap..", num1, num2,);
num1 = num2;
var temp = num1;
num1 = num2;

var num1 = 2000;
var num2 = 1000;
console.log("afterswap..", num1, num2,);
num2 = num1;
var temp = num2;
num2 = num1;

console.log("")

function addThreeValues(a, b, c) {
    var result = a + b + c;
    console.log("result is:", result);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", " Good", " Morning");