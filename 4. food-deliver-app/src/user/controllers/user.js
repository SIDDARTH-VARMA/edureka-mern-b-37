
const User = require("../models/user");
const repo = require("../repositories/userRepo");
const jwt = require("jsonwebtoken");

// api/user/register - 
module.exports.register = async(req, res)=>{
    // 1. read req.body.
    // 2. Create a model for this data.
    console.log(req.body);
    const user = new User(req.body.name, req.body.email, req.body.password);
    const result = await repo.add(user);
    if(result){
        return res.end("User is added");
    }else{
        return res.end("User failed to add");
    }
}

// api/user/login
module.exports.login = async (req, res)=>{
    
    // 1. Check if email and password is correct.
    const email = req.body.email;
    const user = await repo.getByEmail(email);
    if(!user || (user.password!=req.body.password)){
        return res.status(400).send("Invalid credentials");
    }else{
        // 2. Create a jwt (jsonwebtoken).
        const token = jwt.sign(
            {userid:user._id},
            "THISISMYPRIVATEKEY",
            {
                expiresIn: "2h"
            }
        );

        // 3. Send Jwt token in response.
        return res.status(200).send(token);
    }
}