import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { userModel } from "../models/user.model.js";

async function signup(req, res) {
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

    const token = jwt.sign({
      id: user._id,
      role: user.role
    }, process.env.JWT_SECRET);

    res.cookie("token", token);
    
    return res.status(201).json({
      message: "User signed up successfully",
      user: {
        id: user._id,
        email: user.email,
      }
    });
  }


async function login(req, res) {
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

    const token = jwt.sign({
      id: user._id,
      email: user.email,
      profilePicture: user.profilePicture,
      username: user.username,
      dob: user.dob,
    }, process.env.JWT_SECRET);

    res.cookie("token", token);
    
    return res.status(200).json({
      message: "User logged in successfully",
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  };

export { signup, login };