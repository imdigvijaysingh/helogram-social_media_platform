import express from 'express';
import multer from 'multer';
import { createPost } from '../controllers/createPost.controller.js';

const router = express.Router();

const upload = multer({ 
    storage: multer.memoryStorage() 
})

router.post('/', upload.single('image'), createPost);

export const createPostRoutes = router;