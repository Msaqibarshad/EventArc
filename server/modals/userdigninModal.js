const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    User_Email:{
        type:String,
        required:true,

    },
    User_Password:{
        type:String,
        required:true,

    }

});

//Export the model
module.exports = mongoose.model('UserSignIn', userSchema);