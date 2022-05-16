/* eslint-disable linebreak-style */
const express = require('express');
const User = require('../model/User');
const jwt=require('jsonwebtoken');
const verifyToken=require('../middleware/auth')
require('dotenv').config();

const router = new express.Router();

// create user(register)
router.post('/registerUser', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token=jwt.sign({_id:user._id},'hello')
    res.status(201).send({token});
  // eslint-disable-next-line linebreak-style
  } catch (e) {
    res.status(400).send('false');
  }
});

// user login
router.post('/loginUser', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token=jwt.sign({_id:user._id},'hello')
    console.log(token)
    if (user) {
      //await res.send('true');
      res.status(201).send({token});
    } 
  } catch (e) {
    res.status(400).send('false');
  }
});

module.exports = router;
