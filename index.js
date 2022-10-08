const express = require("express");
const app = express();
require("dotenv").config();
const port = 3030 || process.env.PORT;
const connectDB = require("./db/connect")
const schemes = require("./routes/schemes");
const cors = require("cors");


const corsOptions = {
    // origin: process.env.ALLOWED_CLIENTS.split(',')
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}
// console.log(corsOptions.origin);

app.use(cors(corsOptions));


app.use(express.static("./public"));
app.use(express.json());


app.use("/api/v1/schemes", schemes);

const url = "mongodb+srv://devarshee:devarshee@cluster0.c6f8h6h.mongodb.net/yojna?retryWrites=true&w=majority"

const start = async () => {
    try {
        await connectDB(url);
        app.listen(port, ()=>{
            console.log(`server is listening on port ${port}`);
        })
    } catch (err) {
        console.log(err);
    }    
}    

start();