const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firtname : {
        required:true,
        type:String
    },
    lastname:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    contactnumber:{
        required:true,
        type:String
    }
})

module.exports = mongoose.model('User',userSchema);