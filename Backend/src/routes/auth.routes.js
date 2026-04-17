import express from 'express';
import * as authController from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.post('/signup', authController.signup);

authRouter.post('/login', authController.login);

authRouter.get('/verify-email', authController.verifyEmail);

authRouter.post('/logout', authController.logout);

export default authRouter;