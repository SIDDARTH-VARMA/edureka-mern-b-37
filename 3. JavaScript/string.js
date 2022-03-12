// combination of alpha&numeric&speicalchars
// special chars-@#$%&)()

let password = "QweT&@#3691";

console.log(typeof password);

// 1. How to make all characters in lowercase
console.log(password.toLowerCase());

// 2. How to make all characters in uppercase
console.log(password.toUpperCase());

// 3. How do I check if string contains some characters.
console.log(password.includes("692"));

// 4. How do I find index of a character in string.
console.log(password.indexOf("#"));

// 5. How do i check if string ends with some characters.
console.log(password.endsWith("90"));

let empname="dadvdid";
console.log(empname.indexOf("d", 3));