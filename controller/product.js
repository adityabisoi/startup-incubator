import mongoose from "mongoose";
import postSchema from "../model/postSchema.js";
export const getProducts=async(req,res)=>{
 
    try{
       const product= await postSchema.find();
       console.log("i am in getproducts"+product)
         res.status(200).json(product);
    }catch(e){
        res.status(404).json({message:e})
        console.log(e)
    }

}

export const createProduct= async(req,res)=>{
    try{
         const product = req.body;
         const newProduct = new postSchema(product);
         await newProduct.save();
         console.log("createproduct wokrs fine");
         console.log(newProduct);
         res.status(201).json(newProduct)
    }catch(e){
        console.log(e)
        res.status(409).json({message:e})
    }

}
export const comment= async(req,res)=>{ 
   
    const {id} =req.params;
    const {value} =req.body;
    
    const product = await postSchema.findById(id);
    product.comments.push(value);
    //add commets
    const updatedPost = await postSchema.findByIdAndUpdate(id,product,{new:true});
    //update in data base
    res.json(updatedPost);
  }
  export const upvote= async(req,res)=>{ 
   
    const {id} =req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");
    const product = await postSchema.findById(id);
   
    const updatedPost = await postSchema.findByIdAndUpdate(id ,{upvote:product.upvote+1}, {new:true})
    res.json(updatedPost);
  }
  export const getProduct =async(req,res)=>{
    const {id} =req.params;
     try{
         const product= await postSchema.findById(id);
        
         res.status(200).json(product);
  
     }catch(error){
          res.status(404).json({message:error.message})
     }
  }