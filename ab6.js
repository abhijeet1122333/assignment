// Program to print the below format

let n = 5;
let string = "";
for (let i = 1; i < n; i++) {
    for(let j = 0; j < n - 1; j++)  {
        string +="*";
    }
    string += "\n";
}
console.log(string);