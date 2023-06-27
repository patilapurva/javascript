let a=0;
let b=1;
console.log(a);
console.log(b);
for(i=1;i<=10;i++){
    var temp=a+b;  //1+3/3
    console.log(temp);
    a=b;   //1=>2
    b=temp  ;//2=>3
}