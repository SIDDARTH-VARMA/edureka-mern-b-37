
const mongoose = require("mongoose");

const url = "mongodb+srv://test:test@cluster0.cbdyt.mongodb.net/mongooseFDDB?retryWrites=true&w=majority"

exports.mongooseConnect = ()=>{
    mongoose.connect(url)
        .then(
            ()=>{
                console.log("Connected using mongoose");
            },
            err=>{console.log(err)}
        )
}