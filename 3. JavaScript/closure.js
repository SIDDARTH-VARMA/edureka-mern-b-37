

function add(num1, num2){
    var num3 = 10;
    return function sum(){
        return num1+num2+num3;
    }
}

const result = add(20, 30); // returns sum funciton
console.log(result);
console.log(result()); // invoking sum function.


// 1 million functions => 0.1mb.=> 100gb.
