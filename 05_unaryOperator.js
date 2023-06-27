var num1 = 5;
var num1 = num1 + 1;
console.log(`${num1}`);

console.log(`Increment operator - post fix`);
var num2 = 10;
var num2 = num2++;// num2 + 1 = 11 
console.log(` post Increment operator:  ${num2}`);

console.log(`Increment operator - pre fix`);
var num3 = 15;
var num3 = ++num3;// num3 + 1 = 16
console.log(` post Increment operator:  ${num3}`);

console.log(`Decrement operator - post fix`);
var num4 = 20;
var num4 = num4--;// num4 - 1 = 
console.log(` post Increment operator:  ${num4}`);

console.log(`Decrement operator - post fix`);
var num5 = 30;
var num5 = --num5;// num4 - 1 = 
console.log(` post Increment operator:  ${num5}`);


var num1;//
num1 = num1++; // undefined + 1 ==> NaN
console.log(`${num1}, type of NaN is ${typeof num1}`);

console.log(`${0/0}`);

var numTwo = "200";
numTwo = numTwo++; // 200 + 1
console.log(`${numTwo}`);

var num3 = "Ten";// "10" ==> 10
num3 = --num3; 
console.log(`${num3}`);

var city = "Pune";
var result = +city;
console.log(`${result}`);

var num5 = "100";
var result = +num5;
console.log(`Result is ${result} and it's type is: ${typeof result}`);

console.log(`${ '3' + 2 }`);
console.log(`${ '3' + undefined }`);

console.log(`${ '6' - true}`);

console.log(`${ 7 - false}`);

console.log(`${ false - undefined}`);

console.log("======== explicit conversion ===========");


console.log(`===== Boolean to Number Explicit conversion========`);
var num1 = true; // boolean to number ==> Number
var result = Number(num1);
console.log(`Boolean to number ${result} and it's type ${typeof result}`);

console.log(`===== String to Number Explicit conversion========`);
var num2 = "30"; // string to number ==> Number
var result = Number(num2);
console.log(`String to number ${result} and it's type ${typeof result}`);

console.log(`===== Any type to Boolean Explicit conversion========`);
var num3 = 1; // conversion number to boolean
var result =  Boolean(num3);
console.log(`number to boolean ${result} and it's type ${typeof result}`);

var num3 = 0; // conversion number to boolean
var result =  Boolean(num3);
console.log(`number to boolean ${result} and it's type ${typeof result}`);

var num4 = "Bill gates"; // conversion String to boolean
var result =  Boolean(num4);
console.log(`string to boolean ${result} and it's type ${typeof result}`);


console.log(`===== Any type to String Explicit conversion========`);
var num5 = 100; 
var result =  String(num5);
console.log(`number to string ${result} and it's type ${typeof result}`);

var num6 = true; 
var result =  String(num6);
console.log(`number to string ${result} and it's type ${typeof result}`);