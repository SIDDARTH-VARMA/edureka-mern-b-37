// Loops
    // 1. Do something in loop.
    // 2. Repeat similar operations.
    // Steps:
        // 1. Initialization - where loop begins
        // 2. Condition - how long loop runs.
        // 3. Increament or decreament.

//1. While Loop.
// Print numbers from 1 to 10.
let i = 1;
while(i<=10){
    console.log(i);
    i=i+1;
}

// Reverse a string;
// my name is Dheeraj;
const str = "my name is Dheeraj";
console.log(str.length); // 18
const index = str.length-1; // 17

let reversedString="";

for(let i=index; i>=0;i--){ // j, ja, jar, jare, jaree, jareeh....
    reversedString=reversedString.concat(str[i]);
}
console.log(reversedString);