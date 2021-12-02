import users from "../services/users.js";

import config from "../config/index.js";

export default {
  login: async (req, res, next) => {
    const { email, password } = req.body;
    const { valid, data, error } = users.validateLoginData(email, password);
    if (!valid) {
      return res.status(400).json({ message: error });
    }
    const user = await users.findUserByEmail(data.email);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur pas trouvé." });
    }
    const correctPassword = await users.checkPassword(user.password, password);
    if (!correctPassword) {
      return res.status(403).json({ message: "Mot de passe incorrect." });
    }
    const userId = user._id.toString();
    const jwtToken = users.signAuthenticationToken(userId);
    const cookieOptions = {
      maxAge: 1000 * 60 * 60,
      signed: true,
      httpOnly: true,
      secure: config.nodeEnv !== "development",
    };
    return res
      .status(200)
      .cookie("userId", jwtToken, cookieOptions)
      .json({ ok: true });
  },
};
