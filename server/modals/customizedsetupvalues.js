const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
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