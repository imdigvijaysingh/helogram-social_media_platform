import express from 'express';
import multer from 'multer';
import * as profileController from '../controllers/profile.controller.js';
import * as authMiddleware from '../middlewares/auth.middleware.js';

const profileRouter = express.Router();

const upload = multer({
    storage: multer.memoryStorage()
})

profileRouter.post('/create', authMiddleware.authUser, upload.single('profilePhoto'), profileController.createProfile);
profileRouter.get('/get-me', authMiddleware.authUser, profileController.getMe);

export default profileRouter;