import dotenv from "dotenv";

dotenv.config();

export default {
  nodeEnv: process.env.NODE_ENV || "production",
  appName: process.env.APP_NAME,
  port: process.env.PORT || 3000,
  cookieSecret: process.env.COOKIE_SECRET,
  jwtSecret: process.env.JWT_SECRET,
  dbUrl: process.env.DB_URL || "mongodb://localhost:27017",
  dbName: process.env.DB_NAME || "test",
  cdnUrl: process.env.CDN_URL,
  s3BucketName: process.env.S3_BUCKET_NAME,
  s3BucketRegion: process.env.S3_BUCKET_REGION,
  s3AccessKey: process.env.S3_ACCESS_KEY,
  s3SecretKey: process.env.S3_SECRET_KEY,
  emailAddress: process.env.EMAIL_ADDRESS,
  emailClientId: process.env.EMAIL_CLIENT_ID,
  emailClientSecret: process.env.EMAIL_CLIENT_SECRET,
  emailRedirectUri: process.env.EMAIL_REDIRECT_URI,
  emailRefreshToken: process.env.EMAIL_REFRESH_TOKEN,
  emailAccessToken: process.env.EMAIL_ACCESS_TOKEN,
};
