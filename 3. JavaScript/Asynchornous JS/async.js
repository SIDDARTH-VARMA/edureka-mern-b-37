// 1234
// 1342 - Correct

console.log("Task 1");  // immediately.

// executes given task after given ms.
// happens later.
setTimeout(()=>{console.log("Task 2")}, 2000);
setTimeout(()=>{console.log("Task 2.5")}, 0);

// // immediately.
console.log("Task 3");

// immediately.
console.log("Task 4");