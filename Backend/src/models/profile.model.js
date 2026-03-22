import mongoose from 'mongoose';

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

export { profileModel };