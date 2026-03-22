import express from 'express';
import cors from 'cors';
import { authRoutes } from './routes/auth.routes.js';
import { profileRoutes } from './routes/profile.routes.js';
import { createPostRoutes } from './routes/createPost.routes.js';
import { postRoutes } from './routes/post.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/create-post', createPostRoutes);
app.use('/posts', postRoutes);

export { app };