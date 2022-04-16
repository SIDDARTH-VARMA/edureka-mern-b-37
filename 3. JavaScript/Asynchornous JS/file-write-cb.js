
function writeFile(cb){
   setTimeout(()=>{
       // Data is being written;
       console.log("Writing data");
       cb();
   }, 10000);
}
//Callback -> a function passed as paramater to asynchronous function
// which is executed by asynchronous function after async tasks are completed.

const ack = function(){
    console.log("Data is written");
}

writeFile(ack); // I/O operation
