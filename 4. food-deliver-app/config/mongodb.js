
// Connect to Mongodb database.

const mongodb = require("mongodb");

const mongoDbClient = mongodb.MongoClient;

const url = "mongodb+srv://test:test@cluster0.cbdyt.mongodb.net/foodDeliveryAppDb?retryWrites=true&w=majority";

exports.localconnect = async ()=>{

    try{
        const client = await mongoDbClient.connect(url);
        console.log("Db is connected");
    }catch(err){
        console.log(err);
    }

}
