import mongoose from "mongoose"
const postSchema = new mongoose.Schema({
title:String,
message:String,
selectedFile:String,
upvote:{
    type:Number,
    default:0,
},
comments:{
    type:[String],
    default:[],
},
createdAt:{
    type:Date,
    default:new Date()
}
})
export default  mongoose.model("Post",postSchema)
