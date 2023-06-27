console.log("1. Count the total number of vowels incliding small and capital vowels for string ,`I am very good IT Developer`.");

var word = "I am very good IT Developer";
var count = 0;
for (let index = 0; index < word.length; index++){
    var char = word.charAt(index); // 
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'||
    char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U'){
        console.log(char);
        count++;
    }

}
console.log(`Count total vowels: ${count}`);


console.log("2. Wrire a function to get the sum of cube of numbers from 1 to 5");
// 1*1*1 + 2*2*2 = 3*3*3 + 4*4*4 + 5*5*5 

var sumOfQube = function(){
    var sum = 0;
    for (let index = 1; index <=5; index++) {
        sum = sum + index * index * index ;
        
    }
    console.log(`sum of Qube of number is: ${sum}`);

    
}
sumOfQube(5);


console.log("3. Write a function as mentioned below");

function oddPositionCharts(givenString){
    var str =" ";
    for (let index = 0; index < givenString.length; index++) {
        var char = givenString.charAt(index);
        if(index%2!=0 && char!=""){
            str = str + char;

        }
        
        
    }
    console.log(`${str}`);
}
oddPositionCharts("Hard work always pays back");



function oddPositionCharts(givenString){
    var str =" ";
    for (let index = 0; index < givenString.length; index++) {
        var char = givenString.charAt(index);
        if(index%2!=0 && char!=""){
            str = str + char;

        }
        
        
    }
    console.log(`${str}`);
}
oddPositionCharts("Soon I will be Angular IT champ ");