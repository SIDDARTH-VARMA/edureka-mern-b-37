
function getCardDetails(card){
    validateCard(card, deductAmount, handleError)
}

function deductAmount(amount){
    console.log("Amount is deducted");
}

function handleError(err){
    console.log("Some error occurred: "+err);
}

// Third-party
function validateCard(card, deductAmount, errorCB){
    setTimeout(()=>{
        console.log("Valdated");
        deductAmount();
        deductAmount();
        deductAmount();
        try{
            throw new Error("Error");
        }
        catch(err){
            errorCB(err);
        }
        deductAmount();
    }, 2000)
}

getCardDetails();