import express from "express";
const app= express();
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./router/product.js";

app.use(express.json());
app.use(cors());

dotenv.config();
app.use(bodyParser.json({limit:"100mb" , extended:true}))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

app.use("/product",routes)
app.get("/",(req,res)=>{
    res.send("hello")
})
const db="";
 const PORT= 5000;
mongoose.connect(db).then(()=>{
    console.log("conn successfull")
}).catch((e)=>{
    console.log("n conn",e)
})

app.listen(PORT,()=>{
    console.log("server is runing");
}) 