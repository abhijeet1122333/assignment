// Write a program to find whether a number is Armstrong or not

const number = prompt("Enter a positive integer");
const numberOfDigits = number.length;
let sum = 0;

// just a temporary variable
let temp = number;

while(temp>0){
    let remainder = temp % 10;
    sum +=remainder ** numberOfDigits;

    temp = parseInt(temp/10);
}

if(sum==number) {
alert('${number}is an Armstrong number')
}
else{
    alert('${number}is not an Armstrong number')
}