console.log("Find the greatest number amongst two number");
var greaterNumber = function (num1, num2){
    var result = num1>=num2 ? `${num1} is greater` : `${num2} is greater`;
    console.log(result);
}
greaterNumber(10, -10);


var greaterNumber = function (num1, num2){
    var result = num1>=num2 ? `${num1} is greater` : `${num2} is greater`;
    console.log(result);
}
greaterNumber(800, 899);
console.log("");

console.log("Check EVEN or ODD number");
var isEvenOrOddNum = function(num){
    var result = num%2 == 0 ? true : false;
    return result;
}
var result = isEvenOrOddNum(29);
var res = (result == true) ? "29 is even": "29 is odd";
console.log(`${res}`);

var isEvenOrOddNum = function(num){
    var result = num%2 == 0 ? true : false;
    return result;
}
var result = isEvenOrOddNum(44);
var res = (result == true) ? "44 is even": "44 is odd";
console.log(`${res}`);

var isEvenOrOddNum = function(num){
    var result = num%2 == 0 ? true : false;
    return result;
}
var result = isEvenOrOddNum(0);
var res = (result == true) ? "0 is even": "0 is odd";
console.log(`${res}`);

var isEvenOrOddNum = function(num){
    var result = num%2 == 0 ? true : false;
    return result;
}
var result = isEvenOrOddNum(101);
var res = (result == true) ? "101 is even": "101 is odd";
console.log(`${res}`);

console.log("");

// 
console.log(`Check word has even or odd length is:`);
function oddEvenValues(str) {
    var Data = str; 
    var DataLength = Data.length;
    console.log(`The length is:`,DataLength);
    var result = str%2 ? "JavaScript has Odd" : "JavaScript has Even";
    console.log(`${result}`);
   
}
oddEvenValues("Java Srcipt");
console.log(` `);

function oddEvenValues1(str1) {
    var Data = str1; 
    var DataLength = Data.length;
    console.log(`The length is:`,DataLength);
    var Result = str1%2==0 ? "Developer has Even":"Developer has Odd";
    console.log(`${Result}`);
   
}
oddEvenValues1("Developer");
console.log(`  `);


function oddEvenValues2(str2) {
var Data = str2;
var DataLength = Data.length;
console.log(`The length is:`,DataLength);
var result = str2%2 ? "Google has Odd" : "Google has Even";
console.log(`${result}`);

}
oddEvenValues2("Google");   
console.log(`  `);