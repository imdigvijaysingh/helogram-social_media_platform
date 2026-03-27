import express from 'express';
import multer from 'multer';
import { createPost } from '../controllers/createPost.controller.js';

const createPostRouter = express.Router();

const upload = multer({ 
    storage: multer.memoryStorage() 
})

createPostRouter.post('/', upload.single('image'), createPost);

export default createPostRouter;