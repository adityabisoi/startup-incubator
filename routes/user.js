/* eslint-disable linebreak-style */
const express = require('express');
const User = require('../model/User');
const jwt=require('jsonwebtoken');
const crypto = require('crypto');
const verifyToken=require('../middleware/auth')
require('dotenv').config();
const send = require('../mailer/mailer')

const router = new express.Router();

// create user(register)
router.post('/registerUser', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token=jwt.sign({_id:user._id},'hello')
    user.token=token;
    await user.save();
    res.status(201).send({user,token});
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
    //console.log(token)
    if (user) {
      user.token=token;
      await user.save();
      res.status(201).send({user,token});
    } 
  } catch (e) {
    res.status(400).send('false');
  }
});

router.post('/reset-password',(req,res)=>{
  crypto.randomBytes(32,(error,buffer)=>{
    if(error){
      console.log(error);
    }
    const token = buffer.toString("hex");
    const msgHTML = `<h2>We are from Startup Incubator</h2>
                    <p>You requested to reset password</p>
                    <h5><a href="http://localhost:3000/reset-password/${token}">Click here </a>to reset the password</h5>`
    const mailOptions = {
      from: 'no-reply@gmail.com',
      to: req.body.email,
      subject: 'Reset password',
      html: msgHTML
    };
    User.findOne({email:req.body.email})
    .then(user=>{
      if(user)
      {
        user.resetToken = token;
        user.expireToken = Date.now() + 1200000;
        user.save().then(()=>{
          console.log('resetToken saved');
        })
      }
    }).catch(()=>{
      console.log('error occured');
    })

    send(mailOptions);

    res.json({msg:"check your email"});
  })
});

router.post('/change-password',async (req, res)=>{
  const token = req.body.token;
  const user = await User.findOne({resetToken:token ,expireToken:{$gt:Date.now()}});
  if(!user)
  {
    throw new Error('Something went wrong');
  }
  user.password = req.body.password;
  await user.save();
  res.send({password:user.password,body:req.body});

})

module.exports = router;
