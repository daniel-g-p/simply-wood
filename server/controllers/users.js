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
  getAdminData: async (req, res, next) => {
    const jwtToken = req.signedCookies.userId;
    const userId = users.verifyJwtToken(jwtToken);
    const admin = await users.getAdminData(userId);
    return res.status(200).json({ admin });
  },
  updateAdminData: async (req, res, next) => {
    const jwtToken = req.signedCookies.userId;
    const userId = users.verifyJwtToken(jwtToken);
    if (!userId) {
      return res.status(400).json({ message: "Identification échouée." });
    }
    const { name, email } = req.body;
    const update = await users.updateAdminData(userId, name, email);
    if (!update.acknowledged) {
      return res.status(500).json({ message: "Une erreur s'est produite." });
    }
    return res.status(200).json({ ok: true });
  },
  changePassword: async (req, res, next) => {
    const jwtToken = req.signedCookies.userId;
    const userId = users.verifyJwtToken(jwtToken);
    if (!userId) {
      return res.status(400).json({ message: "Identification échouée." });
    }
    const data = users.validatePasswordUpdate(req.body);
    if (!data.valid) {
      return res.status(400).json({ message: data.error });
    }
    const { password, newPassword } = data.data;
    const user = await users.findUserById(userId);
    const correctPassword = await users.checkPassword(user.password, password);
    if (!correctPassword) {
      return res.status(403).json({ message: "Mot de passe incorrect." });
    }
    const update = await users.updatePassword(userId, newPassword);
    if (!update.acknowledged) {
      return res.status(500).json({ message: "Une erreur s'est produite." });
    }
    return res.status(200).json({ ok: true });
  },
  logout: (req, res, next) => {
    return res.status(200).clearCookie("userId").json({ ok: true });
  },
};
