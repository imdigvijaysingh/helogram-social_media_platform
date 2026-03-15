const express = require('express');
const profileController = require('../controllers/profile.controller');
const multer = require('multer');

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage()
})

router.post('/', upload.single('profilePhoto'), profileController.profile);

module.exports = router;