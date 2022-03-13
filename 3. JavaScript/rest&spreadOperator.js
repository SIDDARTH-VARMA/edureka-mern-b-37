// Rest and Spread Operator. (...)
// Introduced in ES6.

// Used in collections to help with multiple values.

// Using spread operator
// Converts individual values into an array.
function sum(...numbers){
    let result=0;
    for(let i=0; i<numbers.length; i++){
        result=result+numbers[i];
    }
    console.log(result);
}

sum(2, 3); // 5
sum(2, 3, 4); // 9
sum(2, 3, 4, 5); // 14
