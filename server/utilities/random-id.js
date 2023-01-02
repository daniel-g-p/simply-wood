import crypto from "crypto";

export const randomId = (length = 16) => {
  return crypto.randomBytes(length).toString("hex");
};
