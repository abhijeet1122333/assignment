// Write a program to print Factorial of any number
let fact = 1;
let number =parseInt(prompt("Enter number:"));

for(let i = 1; i<=number; i++){
    fact = fact*i;
}
alert(fact);