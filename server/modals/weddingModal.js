const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date:{
    type:String,
    required:true,
    
},
time:{
    type:String,
    required:true,
    
},
  persons: {
    type: String,
    required: true,
  },
  bitems: {
    type: String,
    required: true,
  },
  ditems: {
    type: String,
    required: true,
  },
  stagechtype: {
    type: String,
    required: true,
  },
  dcolor: {
    type: String,
    required: true,
  },
  parking: {
    type: String,
    required: true,
  },
  dj: {
    type: String,
    required: true,
  },
  fireworks: {
    type: String,
    required: true,
  },
  otherdec: {
    type: String,
    required: true,
  },
});

//Export the model
module.exports = mongoose.model("Wedding", userSchema);
