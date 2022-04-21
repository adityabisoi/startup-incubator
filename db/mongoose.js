/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-console */
// const mongoose = require('mongoose');
require('dotenv').config();

// const DB = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.lgyhc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&ssl=true`;
// mongoose.connect(DB, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

//   .then(() => console.log('DATABASE CONNECTED'))
//   .catch((err) => console.log(err));

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Start', {});

const connectToDatabase = () => { console.log('Connected'); };

module.exports = connectToDatabase;
