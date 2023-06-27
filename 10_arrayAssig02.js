arrayNumbers = [ 20,31,40,25,23,11,29,9,60,2,11 ];
console.log(`The given String is: ${arrayNumbers}`);

var arrayNumbersLength = [ 20,31,40,25,23,11,29,9,60,2,11 ];
var arrayNumbersLength = arrayNumbersLength.length;
console.log(`Array length :${arrayNumbersLength}`);

// console.log(`Step:2`);
// the 1st and last element in arrayNmubers.
const firstIndexValue = arrayNumbers[0];
console.log(`First element: ${firstIndexValue}`);
const lastIndexValue = arrayNumbers[10];
console.log(`Last element : ${lastIndexValue}`);


// console.log(`Step 3:Third Last Element using length property..`);
//the 1st and last element in arrayNmubers.
const thirdElementValue = arrayNumbers.lengths;
const lastThirdElementValue = arrayNumbers[arrayNumbersLength-3];
console.log(`Third last element : ${lastThirdElementValue}`);

 console.log(`All Even Number`);
 arrayNumbers = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 for (const element of arrayNumbers) {
     if (element%2==0)
     console.log(element);
 }

 
 console.log(`All Odd Number`);
 arrayNumbers = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 for (const element of arrayNumbers) {
     if (element%2)
     console.log(element);
 }

 console.log(`Even number position element:`);
 arrayEven = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 for (const element in arrayEven) {
     if (element%2==0)
     console.log(`${arrayEven [element]}`);
 }

 console.log('Odd number position element:');
 arrayOdd = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 for (const element in arrayOdd) {
    if (element%2)
    console.log(`${arrayOdd [element]}`);
 }

 
 console.log(`Sum of all element in array`);
//Sum Of ALL Element from arrayNumbers
const array =  [ 20,31,40,25,23,11,29,9,60,2,11 ];
var sum =0;
for (let index = 0; index < array.length; index++) {
     sum += array[index];
}
 console.log(`Sum of Total element : ${sum}`);

 console.log(`Number multiple of 5`);
 //find the number which are multiple of 5.
 console.log(`Multiple of 5 is: `);
 const num = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 for (const element of num) {
     if (element%5==0)
     console.log(element);
    
 }

 console.log(`Is Number 115 available`);
 console.log(`false`);
 arrayNumbers = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 arrayNumbers.includes(115);

 console.log(`Is Number 23 available..`);
 console.log(`true`);
 arrayNumbers = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 arrayNumbers.includes(23);


console.log(`Insert element 55 ,66`);
var arrayNumbers = [ 20,31,40,25,23,11,29,9,60,2,11 ];
console.log(arrayNumbers);
arrayNumbers.splice(3,0, 55,66)
console.log(arrayNumbers);


console.log(`Delete 3 elements starting from index 4`);
var arrayNumbers = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 var slice = arrayNumbers.slice(4)
 console.log(arrayNumbers);
var arrayNumbers = [ 20,31,40,25,23,11,29,9,60,2,11 ];
const arraySpliced = arrayNumbers.splice(0,5);
console.log(arrayNumbers);