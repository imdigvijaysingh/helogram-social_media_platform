import nodemailer from 'nodemailer';
import chalk from 'chalk';
import config from '../config/config.js';

const auth =
    config.EMAIL_AUTH_MODE === 'app_password'
        ? {
              user: config.GOOGLE_USER,
              pass: config.GOOGLE_APP_PASSWORD,
          }
        : {
              type: 'OAuth2',
              user: config.GOOGLE_USER,
              clientId: config.GOOGLE_CLIENT_ID,
              clientSecret: config.GOOGLE_CLIENT_SECRET,
              refreshToken: config.GOOGLE_REFRESH_TOKEN,
              accessUrl: 'https://oauth2.googleapis.com/token',
          };

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth,
});

transporter.verify((error) => {
    if (error) {
        console.error('Error connecting to email server:', error);

        if (
            config.EMAIL_AUTH_MODE === 'oauth2' &&
            error?.code === 'EAUTH' &&
            typeof error?.message === 'string' &&
            error.message.includes('invalid_grant')
        ) {
            console.error(
                'Gmail OAuth rejected the refresh token. Ensure GOOGLE_USER, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, and GOOGLE_REFRESH_TOKEN belong to the same Google OAuth app and are not wrapped in quotes. If needed, switch to EMAIL_AUTH_MODE=app_password and set GOOGLE_APP_PASSWORD.'
            );
        }

        if (
            config.EMAIL_AUTH_MODE === 'app_password' &&
            error?.code === 'EAUTH'
        ) {
            console.error(
                'Gmail app-password authentication failed. Ensure GOOGLE_USER has 2-Step Verification enabled and GOOGLE_APP_PASSWORD is the 16-character app password.'
            );
        }

        return;
    }

    console.log(chalk.yellow(`Email server is ready to send messages (${config.EMAIL_AUTH_MODE})`));
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
