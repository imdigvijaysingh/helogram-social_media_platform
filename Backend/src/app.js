import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import authRouter from './routes/auth.routes.js';
import profileRouter from './routes/profile.routes.js';
import createPostRouter from './routes/createPost.routes.js';
import postRouter from './routes/post.routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('combined'));
app.use(cookieParser())

app.use('/auth', authRouter);
app.use('/profile', profileRouter);
app.use('/create-post', createPostRouter);
app.use('/posts', postRouter);

export default app;