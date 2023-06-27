var sweety = sweety;
var cutie = cutie;
console.log("Before swap..", "sweety ",  "cutie ");

var temp = sweety;
sweety = cutie;
cutie = sweety;
cutie = temp;
// console.log("sweety",cutie, cutie, "sweety:");

var cutie = cutie;
var sweety = sweety;
console.log("After swap..", "cutie",  "sweety ");

var temp = cutie;
cutie = sweety;
sweety= cutie;
sweety = temp;


var num1 = 100;
var num2 = 200; 
var num3 = 300;
 console.log("Before swap..", "num1:", num1, "num2:", num2, "num3:", num3);
 num1=num2=num3;
 var temp = num1;
 num1=num2;
 num2=num3;
 num3=temp;

 var num1 = 100;
 var num2 = 200; 
 var num3 = 300;
 console.log("After swap..", "num2:", num2, "num3:", num3, "num3:", num3);
 num2=num3=num3;
 var temp = num1;
 num2=num3;
 num3=num1;
 num1=temp;