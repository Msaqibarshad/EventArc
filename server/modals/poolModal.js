const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,  
       
    },
    number:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        
    },
    address:{
        type:String,
        required:true,
        
    },
    date:{
        type:String,
        required:true,
        
    },
    time:{
        type:String,
        required:true,
        
    },
    persons:{
        type:String,
        required:true,
        
    },
    parking:{
        type:String,
        required:true,
        
    },
    refreshment:{
        type:String,
        required:true,
        
    },
    camera:{
        type:String,
        required:true,
        
    },
    swimaccessories:{
        type:String,
        required:true,
        
    },
    snack_cool:{
        type:String,
        required:true,
        
    }
    
});

//Export the model
module.exports = mongoose.model('Pool', userSchema);