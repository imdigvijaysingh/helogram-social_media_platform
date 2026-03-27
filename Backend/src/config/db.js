import mongoose from 'mongoose';
import config from './config.js';
import chalk from 'chalk';

async function connectDB() {

    await mongoose.connect(config.MONGO_URI);

    console.log(chalk.green("Connected to DB"));

}

export default connectDB;