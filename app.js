const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Middlewares


//Routes
app.get('/', (req, res) => {
    res.send('This is the home page!');
});

app.get('/blogs', (req, res) => {
    res.send('This is a blog page!');
});

//Connect to db
mongoose.connect(process.env.db_connection, {useNewUrlParser: true},
    () => console.log('connected to DB!')
);

//Listen
app.listen(2000);