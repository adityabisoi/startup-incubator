/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-console */
const mongoose = require('mongoose');
require('dotenv').config();

const url = `mongodb+srv://${process.env.MONGODB_NON_ROOT_USERNAME}:${process.env.MONGODB_NON_ROOT_PASSWORD}@cluster0.lgyhc.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true 
};

mongoose.connect(url, options).then(() => {
  console.log("Connected to database");
});