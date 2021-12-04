import users from "../services/users.js";

export const isLoggedIn = async (req, res, next) => {
  const { userId } = req.signedCookies;
  const verifiedUserId = users.verifyJwtToken(userId);
  if (!verifiedUserId) {
    return res.status(403).json({ message: "Identification échouée." });
  }
  const userExists = await users.checkForUserId(verifiedUserId);
  if (!userExists) {
    return res
      .status(403)
      .clearCookie("userId")
      .json({ message: "Utilisateur pas trouvé." });
  }
  next();
};
