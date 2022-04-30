
// Step 1: Import Express.

const express = require("express");
const userRoutes = require("./src/user/routes/user");
const mongodb = require("./config/mongodb");

// STep 2: Create server and listen
const server = express();
server.listen(4400);

// Connect to database.
mongodb.localconnect();

// Configure routes

server.use("/api/user",userRoutes);

// Step3: Create default response.
server.get("/", (req, res)=>{
    res.end("Hello world from Express");
});

console.log("Server is listening on 4400");