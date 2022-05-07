
// Take req, and verify if token is passed and valid.

const authenticate = (req, res, next)=>{
    // 1. Read token.
    // 2. Check if token is valid
    // 3. if valid, proceed to next middleware.
    // 4. else return 401 response.
    return res.status(401).send("Unauthorized");
}

module.exports = authenticate;