/* eslint-disable linebreak-style */
const mongoose = require('mongoose');
require('dotenv').config();


//The Frontend-form has title,description,imageUrl fields 
const projectSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    imageUrl: {
        type: String,
        trim: true
    }
  });
  
  const Project = mongoose.model('Project', projectSchema);
  module.exports = Project;