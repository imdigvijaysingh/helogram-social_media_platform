import nodemailer from 'nodemailer';
import chalk from 'chalk';
import config from '../config/config.js';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: config.GOOGLE_USER,
        clientId: config.GOOGLE_CLIENT_ID,
        clientSecret: config.GOOGLE_CLIENT_SECRET,
        refreshToken: config.GOOGLE_REFRESH_TOKEN,
        accessUrl: 'https://oauth2.googleapis.com/token'
    }
})
transporter.verify((error) => {
    if (error) {
        console.error('Error connecting to email server:', error);

        if (
            error?.code === 'EAUTH' &&
            typeof error?.message === 'string' &&
            error.message.includes('invalid_grant')
        ) {
            console.error(
                'Gmail OAuth rejected the refresh token. Ensure GOOGLE_USER, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, and GOOGLE_REFRESH_TOKEN belong to the same Google OAuth app and are not wrapped in quotes.'
            );
        }

        return;
    }

    console.log(chalk.yellow('Email server is ready to send messages'));
});

export const sendEmail = async (to, subject, text, html) => {
    const info = await transporter.sendMail({
        from: `"OnBoard" <${config.GOOGLE_USER}>`,
        to,
        subject,
        text,
        html,
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    return info;
};
