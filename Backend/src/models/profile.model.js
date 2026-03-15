const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    profilePhoto: String,
    userName: {
        type: String,
        required: true,
        unique: true
    },
    dob: String
}, {
    timestamps: true
});

const profileModel = mongoose.model("profile", profileSchema);

module.exports = profileModel;