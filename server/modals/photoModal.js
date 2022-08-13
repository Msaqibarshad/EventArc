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
  water: {
    type: String,
    required: true,
  },
  clicks: {
    type: String,
    required: true,
  },
  snack: {
    type: String,
    required: true,
  },
  drink: {
    type: String,
    required: true,
  },
  edited: {
    type: String,
    required: true,
  },
  indoor: {
    type: String,
    required: true,
  },
  outdoor: {
    type: String,
    required: true,
  },
  both: {
    type: String,
    required: true,
  },
});

//Export the model
module.exports = mongoose.model("Photo", userSchema);
