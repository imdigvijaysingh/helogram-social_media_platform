const express = require('express');
const postModel = require('../models/post.model');

async function getPosts(req, res) {
const posts = await postModel.find();
    
    return res.status(200).json({
        message: "Post fetched successfully!",
        posts
    })
}

module.exports = { getPosts }; 