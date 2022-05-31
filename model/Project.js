/* eslint-disable linebreak-style */
const mongoose = require('mongoose');
require('dotenv').config();


//The Frontend-form has title,description,imageUrl fields 
const projectSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createrName:{
    type:String
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
  likes:{
    type: Number
  },
  peopleLiked:[ {
    id:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  comments: [{
    id:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
    },
    comment_data: {
            type:String
    },
    comment_likes: {
            type:Number,
            default:0
    },
    whoLikedComment:[ {
      id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    }]
}]
} , {
  timestamps: true
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;