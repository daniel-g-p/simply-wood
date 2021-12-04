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
    const jwtToken = users.signJwtToken(userId);
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
  checkLoginStatus: async (req, res, next) => {
    const { userId } = req.signedCookies;
    const verifiedUserId = users.verifyJwtToken(userId);
    if (!verifiedUserId) {
      return res.status(403).json({ message: "Identification échouée." });
    }
    const userExists = await users.checkForUserId(verifiedUserId);
    if (!userExists) {
      return res
        .status(404)
        .clearCookie("userId")
        .json({ message: "Utilisateur pas trouvé." });
    }
    return res.status(200).json({ ok: true });
  },
};
