import bcrypt from 'bcryptjs';
import userModel from "../models/user.model.js";
import config, { sendEmail } from '../config/config.js';
import { generateOtp, getOtpHtml } from '../utils/utils.js';
import otpModel from '../models/otp.model.js';

export async function signup(req, res) {

    const { firstName, lastName, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({
      email,
    });

    if (isUserAlreadyExists) {
      return res.status(409).json({
        message: "A user with this email already exists.",
      });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      firstName,
      lastName,
      email,
      password: hash,
    });

    const otp = generateOtp();
    const html = getOtpHtml(otp, firstName);

    const otpHash = await bcrypt.hash(otp, 10);
    
    await otpModel.create({
      email,
      user: user._id,
      otpHash
    })

    await sendEmail(email, "Verify you account", `Your OTP is: ${otp}`, html, firstName);

    return res.status(201).json({
      message: "User signed up successfully",
      user:{
        email: user.email,
        verified: user.verified
      }
    });
}

export async function login(req, res) {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found. Please sign up first.",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Wrong password. Please try again.",
      });
    }
    
    return res.status(200).json({
      message: "User logged in successfully"
    });
}

export async function verifyEmail(req, res) {
    if (!req.body || !req.body.otp || !req.body.email) {
        return res.status(400).json({
            message: "otp and email are required in the request body"
        });
    }

    const { otp, email } = req.body;

    const otpDoc = await otpModel.findOne({ email });

    if (!otpDoc || !(await bcrypt.compare(otp, otpDoc.otpHash))) {
      return res.status(400).json({
        message: "Invalid OTP"
      });
    }

    const user = await userModel.findByIdAndUpdate(otpDoc.user, {
      verified: true
    })

    await otpModel.deleteMany({
      user: otpDoc.user
    })

    return res.status(200).json({
      message: "Email verified successfully",
      user: {
        email: user.email,
        verified: true
      }
    })
}