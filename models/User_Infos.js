const mongoose = require('mongoose');
//userinfo Scheme

const infoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User_Infos', infoSchema)