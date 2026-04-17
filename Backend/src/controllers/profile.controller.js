import profileModel from '../models/profile.model.js';
import uploadFile from '../services/storage.service.js';

export async function createProfile(req, res) {
    try {

        if (!req.file) {
            return res.status(400).json({
                message: "Image is required"
            });
        }

        if(!req.body.userName) {
            return res.status(400).json({
                message: "Username is required"
            })
        }

        const result = await uploadFile(req.file.buffer); 

        const { profilePhoto, userName } = req.body;

        const isUserNameAlreadyExists = await profileModel.findOne({
            userName,
        });

        if (isUserNameAlreadyExists) {
            return res.status(409).json({
                message: "This username is taken. Try a different one.",
            });
        }

        const profile = await profileModel.create({
            user: req.user.id,
            profilePhoto: result.url,
            userName
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
    
}

export async function getMe(req, res) {
    try {
        const user = await profileModel.findOne({ user: req.user.id });

        if (!user) {
            return res.status(404).json({
                message: "Profile not found",
            });
        }

        return res.status(200).json({
            message: "User fetched successfully",
            user: {
                profilePhoto: user.profilePhoto,
                userName: user.userName
            }
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Failed to fetch profile",
        });
    }

}