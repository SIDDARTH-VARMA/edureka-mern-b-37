
const jwt = require("jsonwebtoken");

// Take req, and verify if token is passed and valid.

const authenticate = (req, res, next)=>{
    // 1. Read token.
    const token = req.headers["authorization"];
    if(!token){
        return res.status(401).send("Unauthorized: Token Required");
    }
    // 2. Check if token is valid
    try{
        const payLoad = jwt.verify(token, "THISISMYPRIVATEKEY");
        req.userID = payLoad.userid;
        console.log(req.userID);
    }catch(err){
        return res.status(401).send("Unauthorized: Invalid Token");
    }

    // 3. if valid, proceed to next middleware.
    next();
}

module.exports = authenticate;