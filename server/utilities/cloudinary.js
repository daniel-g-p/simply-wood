import { Readable } from "stream";

import { v2 as cloudinary } from "cloudinary";

import config from "../config/index.js";

cloudinary.config({
  cloud_name: config.cloudinaryName,
  api_key: config.cloudinaryKey,
  api_secret: config.cloudinarySecret,
});

export const getAllResources = async () => {
  return await cloudinary.api.resources((error, data) => {
    if (error) {
      console.log(error);
    }
  });
};

export const uploadImage = async (buffer) => {
  return new Promise((resolve, reject) => {
    const uploader = cloudinary.uploader.upload_stream(
      { folder: "images" },
      (error, result) => {
        if (error) {
          console.log(error);
          resolve(false);
        }
        resolve(result);
      }
    );
    Readable.from(buffer).pipe(uploader);
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteImage = async (publicId) => {
  return new Promise((resolve, reject) => {
    try {
      cloudinary.uploader.destroy(publicId, (error, result) => {
        resolve(result);
      });
    } catch (error) {
      console.log("ERROR", error);
    }
  });
};
