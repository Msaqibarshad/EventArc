const mongoose = require('mongoose'); // Erase if already required
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
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    persons: {
        type: String,
        required: true,
    },
    firework: {
        type: String,
        required: true,
    },
    decoration: {
        type: String,
        required: true,
    },
    dj: {
        type: String,
        required: true,
    },
    buffet: {
        type: String,
        required: true,
    },
    m_pic: {
        type: String,
        required: true,
    }
});
//Export the model
module.exports = mongoose.model('Birthday', userSchema);