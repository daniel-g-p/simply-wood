import jwt from "jsonwebtoken";

import config from "../config/index.js";

export const signToken = (token) => {
  const options = { expiresIn: 60 * 60 };
  return jwt.sign({ token }, config.jwtSecret, options);
};

export const verifyToken = (token) => {
  return jwt.verify(token, config.jwtSecret, (error, data) => {
    return error ? false : data.token;
  });
};
