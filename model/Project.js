/* eslint-disable linebreak-style */
const mongoose = require('mongoose');
require('dotenv').config();


//The Frontend-form has title,description,imageUrl fields 
const projectSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
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
  },
  comments: [{
    id:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
    },
    body: {
            type:String
    },
    likes: {
            type:Number
    }
}]
} , {
  timestamps: true
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;