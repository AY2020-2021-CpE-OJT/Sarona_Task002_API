const express = require('express');
const router = express.Router();
const User_Infos = require('../models/User_Infos')      //model
//GET DATA FROM DB
router.get('/', async (req, res) => {
    try {
        const infoGet = await User_Infos.find({'age':26});
        res.json(infoGet);
    }catch {
        res.json({message: err})
    }
});

//SAVE DATA TO DB
router.post('/', async (req,res) => {
    const info = new User_Infos({               //Uses the model and at the same time get info
        name: req.body.name,
        age: req.body.age,
        country: req.body.country
    });
    try {
        const savedInfo = await info.save();
        res.json(savedInfo);
    }catch(err) {
        res.json( {message: err} );
    }
});

module.exports = router;