const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    personname:{
        type:String,
        required:true,
       
    },
    personemail:{
        type:String,
        required:true
    },
    personaddress:{
        type:String,
        required:true
        
    },
    personphone:{
        type:Number,
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
    personvalue:{
        type:String,
        required:true,
    },personpizza:{
        type:String,
        required:true,
    },personburger:{
        type:String,
        required:true,
    },personcooldrink:{
        type:String,
        required:true,
    },personfirewokrs:{
        type:String,
        required:true,
    },persondecoration:{
        type:String,
        required:true,
    },pool:{
        type:String,
        required:true,
    },swim:{
        type:String,
        required:true,
    },refresh:{
        type:String,
        required:true,
    },parking:{
        type:String,
        required:true,
    },dj:{
        type:String,
        required:true,
    },bottles:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('HybridFirstModal', userSchema);