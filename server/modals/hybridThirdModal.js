const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    personname:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    personemail:{
        type:String,
        required:true,
        unique:true,
    },
    personaddress:{
        type:String,
        required:true,
        unique:true,
    },
    personphone:{
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
    pool:{
        type:String,
        required:true,
    },
    swim:{
        type:String,
        required:true,
    },
    refresh:{
        type:String,
        required:true,
    },
    parking:{
        type:String,
        required:true,
    },
    dj:{
        type:String,
        required:true,
    },
    bottles:{
        type:String,
        required:true,
    },
    clicks:{
        type:String,
        required:true,
    },
    editedphoto:{
        type:String,
        required:true,
    },
    outdoorclicks:{
        type:String,
        required:true,
    },
    editedvideo:{
        type:String,
        required:true,
    },
    randomclicls:{
        type:String,
        required:true,
    },
    printed:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('HybridThirdModal', userSchema);