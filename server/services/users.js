import { condition, validate } from "../utilities/validation.js";
import { db } from "../utilities/database.js";
import { verifyHash } from "../utilities/argon2.js";
import { signToken, verifyToken } from "../utilities/jwt.js";

export default {
  validateLoginData: (email, password) => {
    const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return validate(
      { email: email.toLowerCase(), password },
      condition(email, "Adresse email requise."),
      condition(emailFormat.test(email), "Adresse email non valide."),
      condition(password, "Mot de passe requis.")
    );
  },
  findUserByEmail: async (email) => {
    const users = await db.find("users", { email }, ["password"]);
    return users[0];
  },
  checkPassword: async (hash, password) => {
    return await verifyHash(hash, password);
  },
  signJwtToken: (userId) => {
    return signToken(userId);
  },
  verifyJwtToken: (userId) => {
    return verifyToken(userId);
  }
};
