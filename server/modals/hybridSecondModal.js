const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    personname:{
        type:String,
        required:true,
        
    },
    personemail:{
        type:String,
        required:true,
    },
    personaddress:{
        type:String,
        required:true,
    },
    personphone:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true,
        
    },
    time:{
        type:String,
        required:true,
        
    },
    personvalue:{
        type:String,
        required:true
    },
    personpizza:{
        type:String,
        required:true
    },
    personburger:{
        type:String,
        required:true
    },
    personcooldrink:{
        type:String,
        required:true
    },
    personfirewokrs:{
        type:String,
        required:true
    },
    persondecoration:{
        type:String,
        required:true
    },
    clicks:{
        type:String,
        required:true
    },
    editedphoto:{
        type:String,
        required:true
    },
    outdoorclicks:{
        type:String,
        required:true
    },
    editedvideo:{
        type:String,
        required:true
    },
    randomclicls:{
        type:String,
        required:true
    },
    printed:{
        type:String,
        required:true
    },
});

//Export the model
module.exports = mongoose.model('HybridSecondModal', userSchema);