const express = require('express');
const router = express.Router();
const User_Infos = require('../models/User_Infos')      //model

router.get('/', async (req, res) => {
    //get from db
    try {
        const infoGet = await User_Infos.find({'country':'QAT'}, {'_id':0,'name':1,'age':1});
        res.json(infoGet);
    }catch {
        res.json({message: err})
    }
});
// //display
// router.get('/display', (req, res) => {
//     res.send('This is a userinfo page to get your info!');
// });

router.post('/', async (req,res) => {
    const info = new User_Infos({               //Uses the model and at the same time get info
        name: req.body.name,
        age: req.body.age,
        country: req.body.country
    });
    //save to db
    try {
        const savedInfo = await info.save();
        res.json(savedInfo);
    }catch(err) {
        res.json( {message: err} );
    }
});

module.exports = router;