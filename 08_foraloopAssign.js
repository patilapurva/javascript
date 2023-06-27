var word = "I AM Learning JavaScript, The Language of Internet";
// a e i o u == A E I O U
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index); // 
    if (char == 'a' ||  
        char == 'A') {
        console.log(char);
        count++;
    }
    
}
console.log(`Count total number of characters: ${count}`);

var word = "My favourite movie is LAggAn";
// a e i o u == A E I O U
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index); // 
    if (char == 'a' ||  
        char == 'A') {
        console.log(char);
        count++;
    }
    
}
console.log(`Count total number of characters: ${count}`);