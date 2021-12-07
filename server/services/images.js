import { Readable } from "stream";

import { db } from "../utilities/database.js";
import { reformatImage } from "../utilities/sharp.js";
import { uploadImage } from "../utilities/cloudinary.js";

import newImage from "../models/image.js";

export default {
  uploadImages: async (categoryId, files) => {
    for (let file of files) {
      const buffer = await reformatImage(file.buffer, 480, 480);
      const { url } = await uploadImage(buffer);
      const image = newImage(categoryId, url);
      await db.create("images", image);
    }
  },
  getAllImageCategories: async () => {
    return await db.find("categories", {});
  },
  getImagesByCategoryId: async (categoryId) => {
    return await db.find("images", { categoryId });
  },
  updateMainImage: async (categoryId, imageUrl) => {
    const update = { mainImage: imageUrl };
    return await db.updateById("categories", categoryId, update);
  },
  deleteImageById: async (imageId) => {
    return await db.deleteById("images", imageId);
  },
};
