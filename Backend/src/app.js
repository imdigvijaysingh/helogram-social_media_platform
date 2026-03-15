const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const profileRoutes = require('./routes/profile.routes');
const createPostRoutes = require('./routes/createPost.routes');
const postRoutes = require('./routes/post.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/create-post', createPostRoutes);
app.use('/posts', postRoutes);

module.exports = app;