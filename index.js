
import 'dotenv/config'
import connectDB from "./src/db/index.js";
import app from "./app.js";

connectDB().then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`)
        app.on("error",(err)=>{
            console.log("ERROR: ",err);
            throw err
        })
    })
})
.catch((err)=>{
    console.log("Error connecting to database",err)
})


















/*
import express from "express";
const app = express();
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("ERROR: ",error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }catch(error){
        console.log("Error",error);
        throw error
    }
})()

*/