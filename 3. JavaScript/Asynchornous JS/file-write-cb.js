
function writeFile(cb, cb2, err){
   setTimeout(()=>{
       // Data is being written;
       console.log("Writing data");
       cb(cb2);
       err("Error");
   }, 2000);
}
//Callback -> a function passed as paramater to asynchronous function
// which is executed by asynchronous function after async tasks are completed.

function readFile(){
    setTimeout(()=>{
        // Data is being written;
        console.log("Reading data");
        printData();
    }, 2000);
}

function printData(){
    console.log("Printing data");
}

function ack(cb){
    console.log("Data is written");
    cb();
}

function handleError(err){
    console.log(err);
}

writeFile(ack, readFile, handleError); // I/O operation
