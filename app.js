const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
const app = express();

app.use(bodyParser.json());
app.use(cors());
//Import Routes
const postRoute = require('./routes/posts');

// Middleware
app.use('/posts', postRoute)

// Routes
app.get('/', (req, res) => {
  res.send('We are home!')
});

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION, 
  { useNewUrlParser: true, useUnifiedTopology: true }, 
  () => {
    console.log('connected to db')
  })

app.listen(3000)

