import crypto from "crypto";

export function generateOtp() {
  return crypto.randomInt(100000, 1000000).toString();
}

export function getOtpHtml(otp, firstName) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>OnBoard Verification Code</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
      rel="stylesheet"
    />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body, table, td, p, a, div, span {
        font-family: 'Poppins', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
      }
      .otp-single-line {
        white-space: nowrap;
        display: inline-block;
        font-size: 40px;
        font-weight: 600;
        letter-spacing: 25px;
        color: #ba3d4f;
        max-width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        text-overflow: clip;
        word-break: keep-all;
        word-wrap: normal;
      }
      .responsive-container {
        max-width: 680px;
        margin: 0 auto;
        padding: 45px 30px 60px;
        background-size: 800px 452px;
        background-position: top center;
        font-size: 14px;
        width: 100%;
      }
      @media only screen and (max-width: 560px) {
        .otp-single-line {
          letter-spacing: 12px !important;
          font-size: 32px !important;
        }
        .responsive-container {
          padding: 30px 20px 45px !important;
        }
        .main-card {
          padding: 60px 20px 80px !important;
        }
        .otp-wrapper {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          display: block;
          width: 100%;
          text-align: center;
          padding-bottom: 6px;
        }
      }
      @media only screen and (max-width: 420px) {
        .otp-single-line {
          letter-spacing: 8px !important;
          font-size: 28px !important;
        }
      }
      @media only screen and (max-width: 360px) {
        .otp-single-line {
          letter-spacing: 6px !important;
          font-size: 24px !important;
        }
      }
      .main-card-inner {
        margin: 0;
        margin-top: 70px;
        padding: 92px 30px 115px;
        background: #ffffff;
        border-radius: 30px;
        text-align: center;
        color: black;
      }
      .content-max-width {
        width: 100%;
        max-width: 489px;
        margin: 0 auto;
      }
      .helper-text {
        color: gray;
      }
      .footer-link {
        color: #499fb6;
        text-decoration: none;
      }
      .social-icon {
        display: inline-block;
      }
    </style>
  </head>
  <body
    style="
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: #ffffff;
      font-size: 14px;
      width: 100%;
      padding: 0;
    "
  >
    <div
      class="responsive-container"
      style="
        max-width: 680px;
        margin: 0 auto;
        padding: 45px 30px 60px;
        background-size: 800px 452px;
        background-position: top center;
        font-size: 14px;
        color: white;
      "
    >
      <main>
        <div
          class="main-card-inner"
          style="
            margin: 0;
            margin-top: 10px;
            padding: 92px 30px 115px;
            background: #ffffff;
            border-radius: 30px;
            text-align: center;
            color: black;
          "
        >
          <div class="content-max-width" style="width: 100%; max-width: 489px; margin: 0 auto;">
            <p
              style="
                margin: 0;
                font-weight: 500;
                letter-spacing: 0.56px;
              "
            >
              Hi ${firstName} <br>
              Thank you for Boarding with us on OnBoard. Use the following OTP
              to complete the procedure to verify yourself.
            </p>
            <p
              style="
                margin: 0;
                margin-top: 60px;
                font-size: 40px;
                font-weight: 600;
                letter-spacing: 25px;
                color: #ba3d4f;
                white-space: normal;
                line-height: 1.2;
              "
            >
              <span class="otp-single-line" style="white-space: nowrap; display: inline-block; font-size: 40px; font-weight: 600; letter-spacing: 25px; color: #ba3d4f; max-width: 100%; overflow-x: auto; overflow-y: hidden; text-overflow: clip;">
                ${otp}
              </span>
            </p>
            <p
            class="helper-text"
            style="
              color: gray;
            ">
              OTP is valid for
              <span style="font-weight: 600; color: #a32020;">5 minutes</span>.
              Do not share this code with others, including OnBoard
              employees.
            </p>
          </div>
        </div>

        <p
          style="
            max-width: 400px;
            margin: 0 auto;
            margin-top: 90px;
            text-align: center;
            font-weight: 500;
            color: #8c8c8c;
          "
        >
          Need help? Ask at
          <a
            href="mailto:onboardofficials@gmail.com"
            style="color: #499fb6; text-decoration: none;"
            >onboardofficials@gmail.com</a
          >
        </p>
      </main>

      <footer
        style="
          width: 100%;
          max-width: 490px;
          margin: 20px auto 0;
          text-align: center;
          border-top: 1px solid #e6ebf1;
        "
      >
        <p
          style="
            margin: 0;
            margin-top: 40px;
            font-size: 16px;
            font-weight: 600;
            color: #434343;
          "
        >
          OnBoard Officials
        </p>
        <p style="margin: 0; margin-top: 8px; color: #434343;">
          Saharanpur, Uttar Pradesh, India
        </p>
        <div style="margin: 0; margin-top: 16px;">
          <a href="" target="_blank" style="display: inline-block;">
            <img
              width="36px"
              alt="Facebook"
              src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook"
              style="display: block;"
            />
          </a>
          <a
            href="https://www.instagram.com/onboardofficials/"
            target="_blank"
            style="display: inline-block; margin-left: 8px;"
          >
            <img
              width="36px"
              alt="Instagram"
              src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram"
              style="display: block;"
          /></a>
          <a
            href=""
            target="_blank"
            style="display: inline-block; margin-left: 8px;"
          >
            <img
              width="36px"
              alt="Twitter"
              src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503043040_372004/email-template-icon-twitter"
              style="display: block;"
            />
          </a>
        </div>
        <p style="margin: 0; margin-top: 16px; color: #434343;">
          OnBoard Officials © 2026
        </p>
      </footer>
    </div>
  </body>
</html>
`;
}
