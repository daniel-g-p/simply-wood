import messages from "../services/messages.js";

export default {
  sendMessage: (req, res, next) => {
    const { message } = req.body;
    const errors = messages.validateMessage(message);
    if (errors.length) {
      return res.status(400).json({ errors });
    }
    return res.status(200).json({ ok: true });
  },
};
