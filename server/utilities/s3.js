import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

import config from "../config/index.js";

const s3Client = new S3Client({
  region: config.s3BucketRegion,
  credentials: {
    accessKeyId: config.s3AccessKey,
    secretAccessKey: config.s3SecretKey,
  },
});

export const uploadImage = async (filePath, fileBuffer) => {
  const params = {
    Bucket: config.s3BucketName,
    Key: filePath,
    Body: fileBuffer,
  };
  return await s3Client.send(new PutObjectCommand(params)).then(() => {
    return config.cdnUrl + "/" + params.Key;
  });
};

export const deleteImage = async (filePath) => {
  const params = { Bucket: config.s3BucketName, Key: filePath };
  return await s3Client.send(new DeleteObjectCommand(params)).then(() => true);
};
