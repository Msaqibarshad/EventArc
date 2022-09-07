const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },number:{
        type:String,
        required:true,

    },address:{
        type:String,
        required:true,

    },email:{
        type:String,
        required:true,

    },date:{
        type:String,
        required:true,

    },time:{
        type:String,
        required:true,

    },
    curtainvalue:{
        type:String,
        required:true,

    },
    caketablevalue:{
        type:String,
        required:true,
    },
    dinntablevalue:{
        type:String,
        required:true,
    },
    cakevalue:{
        type:String,
        required:true,
    },
    baloonvalue:{
        type:String,
        required:true,
    }
});

//Export the model
module.exports = mongoose.model('Customvalue', userSchema);