
//********************Setting Up A LocalDatabasr**************************** 

// const mongoose=require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/start-inc',{})
// const connectToDatabase=()=>{console.log("Connected")}
// module.exports=connectToDatabase


//*********************Creating a MongoDb Cluster**************************** 

const mongoose=require('mongoose');
const express=require('express');
const app=express()
const DB='mongodb+srv://process.env.USERNAME:process.env.PASSWORD@cluster0.ck7kc.mongodb.net/?retryWrites=true&w=majority&ssl=true'
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connected');
}).catch((e)=>{
    console.log(e)
})

