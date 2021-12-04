import dotenv from "dotenv";

dotenv.config();

export default {
  nodeEnv: process.env.NODE_ENV || "production",
  port: process.env.PORT || 3000,
  cookieSecret: process.env.COOKIE_SECRET,
  jwtSecret: process.env.JWT_SECRET,
  dbUrl: process.env.DB_URL || "mongodb://localhost:27017",
  dbName: process.env.DB_NAME || "test",
  cloudinaryName: process.env.CLOUDINARY_NAME,
  cloudinaryUrl: process.env.CLOUDINARY_URL,
  cloudinaryKey: process.env.CLOUDINARY_KEY,
  cloudinarySecret: process.env.CLOUDINARY_SECRET,
};
