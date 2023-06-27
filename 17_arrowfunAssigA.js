console.log(`A. Arrow function with no arguments and no return value`);
let display = ()=> {
    console.log(`"Good Morning, Today is Monday"`);
}
display();

console.log("------------------------------------------------");
console.log("B. Arrow function with 3 arguments and no return value");
let multiplication=(n1, n2, n3) => {
    let result = n1 * n2 * n3;
    return result;
}
let result = multiplication(5, 5, 2);
console.log(`Multiplication is: ${result}`);



let multi=(n1, n2, n3=1) => {
    const result = 10 * 4 * 1;
console.log(`Multiplication is : ${result}`);
 }
  multi(10,4,1)


console.log("-------------------------------------------------");
console.log(`C. Arrow function with 5 arguments and return value`);
let add = (num1, num2 , num3, num4, num5) => {
    let result = num1 + num2 + num3 + num4 + num5 ;
    return result;
}
let addision = add(100, 100, 200, 349, 756);
console.log(`Addision is: ${addision}`);


let display1 = ()=> {
    console.log(`i am learning ES6 feature in depth`);
}
display1()