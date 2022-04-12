/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-console */
const mongoose = require('mongoose');
require('dotenv').config();

const DB = `mongodb+srv://${process.env.username}:${process.env.PASSWORD}@cluster0.lgyhc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&ssl=true`;
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

  .then(() => console.log('DATABASE CONNECTED'))
  .catch((err) => console.log(err));
