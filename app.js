import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({
    limit:"50mb"
}));
app.use(express.urlencoded({extended:true, limit:"50mb"}));
app.use(express.static("public"));
app.use(cookieParser());//jo mai mere server se, jo user ka browser hai, uska cookie mil jayega, aur usko set kar sakta hoon


export default app;