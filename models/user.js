const { StockSchema } = require('../models/watchList');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    phone:{
        type:String,
    },
    smsAlerts:{
        type: Boolean,
        default:false
    },
    stockHistory:{
        type: [StockSchema],
        default:[]
    }
});

module.exports = mongoose.model('User', userSchema);
