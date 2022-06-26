const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname :{
        type : String,
        required : true,
    },
    email :{
        type : String,
        required : true,
        unique : true,
    },
    phone :{
        type : Number,
        required : true,
    },
    password :{
        type : String,
        required:true
    },
    token :{
        type : String,
        default : ""
    }
})

// creating collection in db
const User = new mongoose.model("User", userSchema);

module.exports = User;