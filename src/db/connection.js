require("dotenv").config();
// anything required needs to be installed

const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI)
// connection string // to keep secure process var goes into env (enviroment file) and picks out MONDO_URI 

const connection = async () =>{
    try {
        await client.connect();
        console.log("success")
        const db = client.db("Films");
        return db.collection("Films");
    } catch (error) {
        console.log(error);

            
        }
    };
// Use this function to check connection
    // connection();

module.exports = { connection, client };
