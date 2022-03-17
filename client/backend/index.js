const express=require('express')
const app=express()
const port=process.env.PORT || 5000

app.listen(port,()=>{
    console.log("Backend server is listening on port 5000")
})