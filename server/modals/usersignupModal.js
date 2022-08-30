const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    signupusernamefirst:{
        type:String,
        required:true,

    },
    signupusernamelast:{
        type:String,
        required:true,
    },
    signupuserphone:{
        type:Number,
        required:true,
    },
    signupuseremail:{
        type:String,
        required:true,
    },
    signupuserpassword:{
        type:String,
        required:true,
    }
});

//Export the model
module.exports = mongoose.model('UserSignup', userSchema);