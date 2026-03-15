const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String, 
    lastName: String, 
    email: {
      type: String,
      required: true,
      unique: true  
    }, 
    password: {
      type: String,
      required: true
    }
}, {
    timestamps: true
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;