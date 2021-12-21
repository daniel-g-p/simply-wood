import nodemailer from "nodemailer";
import { google } from "googleapis";

import config from "../config/index.js";

const oAuth2Client = new google.auth.OAuth2(
  config.emailClientId,
  config.emailClientSecret,
  config.emailRedirectUri
);

oAuth2Client.setCredentials({ refresh_token: config.emailRefreshToken });

const createTransporter = async () => {
  const accessToken = await oAuth2Client.getAccessToken();
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: config.emailAddress,
      clientId: config.emailClientId,
      clientSecret: config.emailClientSecret,
      refreshToken: config.emailRefreshToken,
      accessToken,
    },
  });
};

export const sendEmail = async (name, address, subject, text, replyAddress) => {
  const transporter = await createTransporter();
  const options = {
    from: { name: config.appName, address: config.emailAddress },
    to: { name, address },
    subject,
    text,
    replyTo: replyAddress || config.emailAddress,
  };
  return await transporter.sendMail(options);
};
