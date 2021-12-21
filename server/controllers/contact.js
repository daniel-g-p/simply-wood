import messages from "../services/messages.js";

export default {
  sendMessage: async (req, res, next) => {
    const { message } = req.body;
    const { data, errors } = messages.validateMessage(message);
    if (errors.length) {
      return res.status(400).json({ errors });
    }
    const email = await messages.sendMessage(
      data.firstName,
      data.lastName,
      data.zipCode,
      data.phone,
      data.email,
      data.subject,
      data.message,
      data.language
    );
    if (!email) {
      return res.status(500).json({ errors: ["server"] });
    }
    return res.status(200).json({ ok: true });
  },
};
