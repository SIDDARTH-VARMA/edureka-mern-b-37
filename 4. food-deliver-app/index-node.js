// Responsible for creating a server
// Responsible for handle requests, send response.

// Step 1: Import http package/library.

const http = require("http");

// Step 2: Create server using http.
http.createServer((req, res)=>{
    res.end("Hello world from NodeJS");
}).listen(4400);

console.log("Server is listening on 4400");