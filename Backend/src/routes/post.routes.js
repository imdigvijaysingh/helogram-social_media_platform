import express from 'express';
import { getPosts } from '../controllers/post.controller.js';

const postRouter = express.Router();

postRouter.get('/', getPosts);

export default postRouter;