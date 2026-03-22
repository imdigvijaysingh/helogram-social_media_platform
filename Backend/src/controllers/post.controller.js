import express from 'express';
import { postModel } from '../models/post.model.js';

async function getPosts(req, res) {
const posts = await postModel.find();
    
    return res.status(200).json({
        message: "Post fetched successfully!",
        posts
    })
}

export { getPosts }; 