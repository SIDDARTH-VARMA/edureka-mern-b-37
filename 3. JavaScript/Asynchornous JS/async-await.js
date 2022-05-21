
function validateCard(card){
    const newPromise = new Promise((resolve, reject)=>{
        var x = 200;
        if(card){
           setTimeout(()=>{
            // api calls.   
            resolve(x, {})}
            
            , 2000);
        }else{
            reject("Card is invalid");
        }
    });
    return newPromise;
}

// function validateCard(){
//     return 200;
// }

async function getCardDetails(){
    try{
        var x = await validateCard();
    }catch(err){
        console.log(err);
    }
    console.log(x);
    if(x){
        deductAmount(x);
        printData();
    }
}


function deductAmount(amount){
    console.log("Amount is deducted: "+amount);
}

function printData(){
    console.log("Printing");
}

getCardDetails();