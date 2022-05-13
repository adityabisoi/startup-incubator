/* eslint-disable linebreak-style */
const express = require('express');
const Project = require('../model/Project');
require('dotenv').config();

const router = new express.Router();

//create project
router.post('/createProject',async (req,res)=>{
    const project=new Project(req.body);
    try {
        await project.save();
        res.status(201).send('true');
      // eslint-disable-next-line linebreak-style
      } catch (e) {
        res.status(400).send('false');
      }
})

module.exports = router;