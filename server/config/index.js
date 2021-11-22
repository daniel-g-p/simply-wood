import dotenv from "dotenv";

dotenv.config();

export default {
  nodeEnv: process.env.NODE_ENV || "production",
  port: process.env.PORT || 3000,
  cookieSecret: process.env.COOKIE_SECRET,
};
