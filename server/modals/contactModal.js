const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    contactpname:{
        type:String,
        required:true
    
        
    },
    contactpphone:{
        type:Number,
        required:true,
    },
    contactpemail:{
        type:String,
        required:true,
    },
    contactpmessge:{
        type:String,
    },
});

//Export the model
module.exports = mongoose.model('Contact', userSchema);