// Write a program in JAVASCRIPT to print Fibonacci series. 0,1,1,2,3,5,8,13,21,34

let n = parseInt(prompt("enter the number:"));
let a = 0,b = 1,f;
console.log(a);
console.log(b);
for (let i = 1; i <=n; i++) {
   console.log(f);
   f = a + b;
   a = b;
   b = f;
}