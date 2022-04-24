/* eslint-disable linebreak-style */
const express = require('express');
const User = require('../model/User');
require('dotenv').config();

const router = new express.Router();

// create user(register)
router.post('/registerUser', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send('true');
  // eslint-disable-next-line linebreak-style
  } catch (e) {
    res.status(400).send('false');
  }
});

// user login
router.post('/loginUser', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    if (user) {
      await res.send('true');
    } 
  } catch (e) {
    res.status(400).send('false');
  }
});

module.exports = router;
