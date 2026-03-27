import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: [ true, "FirstName is required" ]
    }, 
    lastName: {
      type: String
    }, 
    email: {
      type: String,
      required: [ true, "Email is required" ],
      unique: [ true, "A user is already registered with the same email" ]  
    }, 
    password: {
      type: String,
      required: [ true, "Password is required" ]
    },
    verified: {
      type: Boolean,
      default: false
    }
}, {
    timestamps: true
});

const userModel = mongoose.model("users", userSchema);

export default userModel;