/* eslint-disable linebreak-style */
const express = require('express');
const Project = require('../model/Project');
const jwt=require('jsonwebtoken');
const verifyToken=require('../middleware/auth')
require('dotenv').config();

const router = new express.Router();

//create project
router.post('/createProject',verifyToken, async (req,res)=>{

    //Adding the user field and setting its value to the userId that came from the middleware while authentication
    //Using the Javascript spread operator for concatenating fields
    const project=new Project({user:req.user._id,...req.body});
    try {
        await project.save();
        res.status(201).send('true');
      // eslint-disable-next-line linebreak-style
      } catch (e) {
        res.status(400).send('false');
      }
})

module.exports = router;