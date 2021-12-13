import { condition, validate } from "../utilities/validation.js";
import { db } from "../utilities/database.js";
import { hashString, verifyHash } from "../utilities/argon2.js";
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
  },
  checkForUserId: async (userId) => {
    const user = await db.findById("users", userId, ["_id"]);
    return user ? true : false;
  },
  getAdminData: async (userId) => {
    return await db.findById("users", userId, ["name", "email"]);
  },
  updateAdminData: async (userId, name, email) => {
    return await db.updateById("users", userId, { name, email });
  },
  findUserById: async (userId) => {
    return await db.findById("users", userId, ["password"]);
  },
  validatePasswordUpdate: (data) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return validate(
      data,
      condition(data.password, "Ancien mot de passe requis."),
      condition(data.newPassword, "Nouveau mot de passe requis."),
      condition(
        regex.test(data.newPassword),
        "Le mot de passe doit comprendre au moins 8 caractères, 1 lettre majuscule, et 1 chiffre."
      ),
      condition(data.confirmPassword, "Confirmation du mot de passe requise."),
      condition(
        data.confirmPassword === data.newPassword,
        "Confirmation du mot de passe incorrecte."
      )
    );
  },
  updatePassword: async (userId, password) => {
    const hash = await hashString(password);
    return await db.updateById("users", userId, { password: hash });
  },
};
