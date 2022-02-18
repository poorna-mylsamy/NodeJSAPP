const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
    user_name:{
        type : String,
        required : true
    }, 
    user_email:{
        type : String,
        required:true       
    } ,
    age:{
        type : Number,
        required : true
    },
    city:{
        type : String,
        required : true
    } ,
    created:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model('users',user_schema);