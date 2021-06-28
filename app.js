//Packages
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
//launch body-parser
app.use(bodyParser.json());

//Userinfo route
const userinfoRoute = require('./routes/userinfo');
app.use('/userinfo', userinfoRoute);
//Home route
app.get('/', (req, res) => {
    res.send('This is the home page!');
});

//Connect to db
mongoose.connect(process.env.db_connection, {useNewUrlParser: true},
    () => console.log('connected to DB!')
);

//Listen
app.listen(2000);