

// Creating promise for third party api.

function validateCard(card){
    const newPromise = new Promise((resolve, reject)=>{
        if(card){
           setTimeout(()=>{
            // api calls.   
            resolve("Card is valid", {})
            resolve("Card is valid", {})
            resolve("Card is valid", {})}
            
            , 2000);
        }else{
            reject("Card is invalid");
        }
    });
    return newPromise;
}



// function getCardDetails(card){
//     validateCard("dummy")
//         .then(
//             (msg)=>{
//                 console.log(msg);
//                 deductAmount();
//             }, // called when promise is resolved.
//             (err)=>{
//                 console.log(err)
//             }, // called when prommise is rejected.
//             ()=>{console.log("completed");} // called when promise is completed.
//         )
// }

// Function Chaining.
function getCardDetails(card){
    validateCard("dummy")
    .then(
        (msg)=>{
            console.log(msg);
            return msg;
        })
    .then(
        (msg)=>{
            deductAmount();
            return;
        }
    )
    .then(
        ()=>{printData();}
    ).catch(
        (err)=>{
            console.log("this is form catch "+err);
        }
    )
}



function deductAmount(amount){
    throw new Error("error while deducting");
    console.log("Amount is deducted");
}

function printData(){
    console.log("Printing");
}

getCardDetails("2016 7834 6721");