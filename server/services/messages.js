import { sendEmail } from "../utilities/email.js";

import config from "../config/index.js";

export default {
  validateMessage: (message) => {
    const data = {
      firstName: message.firstName.trim(),
      lastName: message.lastName.trim(),
      zipCode: message.zipCode.trim(),
      phone: message.phone.trim().replaceAll(" ", ""),
      email: message.email.trim().toLowerCase(),
      subject: message.subject.trim(),
      message: message.message.trim(),
      language: message.language.toUpperCase(),
    };
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const errors = [];
    if (!data.firstName) {
      errors.push("firstName");
    }
    if (!data.zipCode) {
      errors.push("zipCode");
    }
    if (!data.email || !emailRegex.test(data.email)) {
      errors.push("email");
    }
    if (!data.subject) {
      errors.push("subject");
    }
    if (!data.message) {
      errors.push("message");
    }
    return { data, errors };
  },
  sendMessage: async (
    firstName,
    lastName,
    zipCode,
    phone,
    email,
    subject,
    message,
    language
  ) => {
    const senderName = `${firstName} ${lastName}`.trim();
    const phoneNumber = phone || "n/a";
    const subjectLine = `Message de ${senderName}: ${subject}`;
    const emailBody = `${message}\n\nNom: ${senderName}\nAdresse email: ${email}\nTéléphone: ${phoneNumber}\nCode postal: ${zipCode}\nLangue: ${language}\n`;
    try {
      return await sendEmail(
        "Simply Wood",
        config.emailAddress,
        subjectLine,
        emailBody
      );
    } catch (error) {
      return false;
    }
  },
};
