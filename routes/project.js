/* eslint-disable linebreak-style */
const express = require('express');
const Project = require('../model/Project');
const jwt=require('jsonwebtoken');
const verifyToken=require('../middleware/auth');
const { route } = require('express/lib/router');
require('dotenv').config();

const router = new express.Router();


//For Adding Comments
router.post('/addComments/:id',verifyToken,async (req,res)=>{
       
       try{
        const comment = req.body.newComment;
        const product = await Project.findOne({_id:req.params.id})
        product.comments.push({comment_data:comment})
        await product.save();

       }catch(e){
         res.status(404).send('false')
       }
})

router.get('/projects',async(req,res)=>{
  try{
    const products = await Project.find({});
    res.send(products);
  }catch(e){
    res.status(400).send('Something went wrong');
  }
})

router.get('/getProject',verifyToken,async (req,res)=>{
  try{
    const products=await Project.find({user:req.user._id})
    res.send(products)
  }catch(e){
    res.status(400).send("Something went wrong")
  }
})

//create project
router.post('/createProject',verifyToken, async (req,res)=>{

    //Adding the user field and setting its value to the userId that came from the middleware while authentication
    //Using the Javascript spread operator for concatenating fields
    const project=new Project({user:req.user._id,createrName:req.user.name,...req.body});
    try {
        await project.save();
        res.status(201).send('true');
      // eslint-disable-next-line linebreak-style
      } catch (e) {
        res.status(400).send('false');
      }
})

router.delete('/deleteProject/:id',verifyToken,async (req,res)=>{
  const product=await Project.findOneAndDelete({_id:req.params.id})
  try {
    if(!product) {
      return res.status(400).send()
    }
    res.send(product)
  } catch(e){
    res.status(404).send(e)
  }
})

router.post('/changeLikes',verifyToken,async (req,res)=>{
  try{
    const project = await Project.findOne({_id:req.body.id});
    var doesInclude = false;
    for(let i=0; i<project.peopleLiked.length; i++){
      if(project.peopleLiked[i]._id.toString()==req.user._id.toString()){
      doesInclude = true;
      }
    }
    if(doesInclude){
      return res.status(200).send('false');
    }
    project.likes = req.body.likes+1;
    project.peopleLiked.push(req.user.id);
    await project.save(); 
    res.status(200).send({likes:project.likes});
  }catch(e){
    res.status(400).send("Something went wrong");
  }
})

router.get('/getSpecificProject/:id',async (req,res)=>{
  try{
    const product = await Project.findOne({_id:req.params.id})
    res.send(product)
  }catch(e){
    res.status(400).send("Something went wrong")
  }
})

router.post('/incrementCommentLikes/:product_id',async (req, res)=>{
  try{
    const project = await Project.findOne({_id: req.params.product_id});
    var ans = -1;
    for(let i = 0;i<project.comments.length;i++){
      if(req.body.comment_id==project.comments[i]._id.toString())
      {
        project.comments[i].comment_likes++;
        await project.save();
        ans = i;
      }
    }
    if(ans != -1){
      res.send(project.comments[ans]);
    }
  }catch(e){
    res.status(400).send('false');
  }
})


module.exports = router;