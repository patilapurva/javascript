function squareOfWorld(value){

    console.log(`Invoking this function for value "JavaScript"`);
    var word = value;
    var lengthOfWord = word.length;
    console.log(`the length of word is : ${lengthOfWord}`);
    var squareOfWordLength = lengthOfWord*lengthOfWord;
    console.log(`Square of Length is : ${squareOfWordLength}`);
}
squareOfWordLength("JavaScript")

function squareOfWordLength(value){
    console.log(`Invoking this function for value "Google Chrome"`);
    var word = value;
    var lengthOfWord = word.length;
    console.log(`the length of word is : ${lengthOfWord}`);
    var squareOfWordLength = lengthOfWord*lengthOfWord;
    console.log(`Square of Length is : ${squareOfWordLength}`);
}
squareOfWordLength("Google Chrome");


function squareOfWordLength(value){
    console.log(`Invoking this function for value "Developer Smart"`);
    var word = value;
    var lengthOfWord = word.length;
    console.log(`the length of word is : ${lengthOfWord}`);
    var squareOfWordLength = lengthOfWord*lengthOfWord;
    console.log(`Square of Length is : ${squareOfWordLength}`);
}
squareOfWordLength("Developer Smart");

console.log(" ");

var value2 = `I am Angular Developer`;
function divide(){
    console.log(`The given String is : ${value2}`);
    console.log(" ");
    var value2length = value2.length;
    var wordInValue2 = value2.split(" ");
    var valeOfWord = wordInValue2.length;
    var division = value2length/valeOfWord;
    console.log(`length of given string is : ${value2length}`);
    console.log(`total number of words available in that string is : ${valeOfWord}`);
    console.log(`The string length is divided by total number of words available in that string is : ${division}`);
}
divide()
function multiply(){
    console.log(" ");
    var value2length = value2.length;
    var wordInValue2 = value2.split(" ");
    var valeOfWord = wordInValue2.length;
    var multiplication = value2length*valeOfWord;
    console.log(`length of given string is : ${value2length}`);
    console.log(`total number of words available in that string is : ${valeOfWord}`);
    console.log(`The string length is multiplied by total number of words available in that string is : ${multiplication}`);
}
multiply();