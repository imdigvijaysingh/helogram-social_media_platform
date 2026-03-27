import express from 'express';
import multer from 'multer';
import { profile } from '../controllers/profile.controller.js';

const profileRouter = express.Router();

const upload = multer({
    storage: multer.memoryStorage()
})

profileRouter.post('/', upload.single('profilePhoto'), profile);

export default profileRouter;