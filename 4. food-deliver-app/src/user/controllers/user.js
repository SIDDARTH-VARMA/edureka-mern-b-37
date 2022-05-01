
const User = require("../models/user");
const repo = require("../repositories/userRepo");

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
module.exports.login = (req, res)=>{
    // read rea.body
    // db calls.
    res.end("This is login request");
}