const express = require('express');
const router = express.Router();
const User_Infos = require('../models/User_Infos')      //model

router.get('/', (req, res) => {
    res.send('This is a userinfo page to get your info!');
});
//display
router.get('/display', (req, res) => {
    res.send('This is a userinfo page to get your info!');
});

router.post('/', (req,res) => {
    const info = new User_Infos({               //Uses the model and at the same time get info
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    });
    //save to db
    info.save().then(data =>{
        res.json(data);
    }).catch(err =>{
        res.json({message: err});
    })
});

module.exports = router;