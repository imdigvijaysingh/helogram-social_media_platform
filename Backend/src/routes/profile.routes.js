import express from 'express';
import multer from 'multer';
import { profile } from '../controllers/profile.controller.js';

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage()
})

router.post('/', upload.single('profilePhoto'), profile);

export const profileRoutes = router;