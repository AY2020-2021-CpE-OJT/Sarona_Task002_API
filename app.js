const express = require('express');

const app = express();

//Middlewares


//Routes
app.get('/', (req, res) => {
    res.send('This is the home page!');
});

app.get('/blogs', (req, res) => {
    res.send('This is a blog page!');
});

//Listen
app.listen(2000);