import { profileModel } from '../models/profile.model.js';
import { uploadFile } from '../services/storage.service.js';

async function profile(req, res) {
    try {

        if (!req.file) {
            return res.status(400).json({
                message: "Image is required"
            });
        }

        const result = await uploadFile(req.file.buffer); 

        const { profilePhoto, userName, dob } = req.body;

        const isUserNameAlreadyExists = await profileModel.findOne({
            userName,
        });

        if (isUserNameAlreadyExists) {
            return res.status(409).json({
                message: "This username is taken. Try a different one.",
            });
        }

        const profile = await profileModel.create({
            profilePhoto: result.url,
            userName: req.body.userName,
            dob: req.body.dob,
        });

        return res.status(201).json({
            message: "Profile created successfully",
            user: {
                profilePhoto: profile.profilePhoto,
                userName: profile.userName
            }
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Failed to create profile"
        })
    }    
    
};

export { profile };