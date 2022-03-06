
// Difference between var and let.

// Function in JS
// function <nameOfFunction>(<params>){}

// Function Definition
function testDeclaration(){
    // let - scope entire function.
    if(true){
        var x=10;
        let y=20; // scope - inside if block.
        console.log("Inside If block");
        console.log(x); //10
        console.log(y); // 20
    }
    console.log("Outside If block");
    console.log(x); //10
    console.log(y); // y is ont defined
}

// declaring using var has function level scope.
// declaring using let has block level scope.

// Execute a function
testDeclaration();