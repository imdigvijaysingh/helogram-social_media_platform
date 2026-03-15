const express = require('express');
const multer = require('multer');
const createPostController = require('../controllers/createPost.controller');

const router = express.Router();

const upload = multer({ 
    storage: multer.memoryStorage() 
})

router.post('/', upload.single('image'), createPostController.createPost);

module.exports = router;