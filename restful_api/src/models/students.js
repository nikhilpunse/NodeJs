const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type: String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('email is not valide, please check.')
            }
        }
    },
    phone: {
        type:Number,
        required:true,
        minlength :10,
        maxlength :10
    },
    address: {
        type: String,
        required: true
    }
})

// we will create new collecction
const Student = new mongoose.model("Student",studentSchema);

module.exports = Student; 