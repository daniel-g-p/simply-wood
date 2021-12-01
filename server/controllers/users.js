import users from "../services/users.js";

export default {
  login: async (req, res, next) => {
    const { email, password } = req.body;
    const { valid, data, error } = users.validateLoginData(email, password);
    if (!valid) {
      return res.json({ message: error });
    }
    const user = await users.findUserByEmail(data.email);
    if (!user) {
      return res.json({ message: "Utilisateur pas trouvé." });
    }
    const correctPassword = await users.checkPassword(user.password, password);
    if (!correctPassword) {
      return res.json({ message: "Mot de passe incorrecte." });
    }
    // Authenticate user
    return res.status(200).json({ ok: true });
  },
};
