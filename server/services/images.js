import { db } from "../utilities/database.js";
import { reformatImage } from "../utilities/sharp.js";
import { uploadImage, deleteImage } from "../utilities/cloudinary.js";

import newImage from "../models/image.js";

export default {
  uploadImages: async (categoryId, files) => {
    const { mainImage } = await db.findById("categories", categoryId, [
      "mainImage",
    ]);
    for (let i = 0; i < files.length; i++) {
      const buffer = await reformatImage(files[i].buffer, 480, 480);
      const { public_id, url } = await uploadImage(buffer);
      const image = newImage(categoryId, url, public_id);
      await db.create("images", image);
      if (!mainImage && !i) {
        await db.updateById("categories", categoryId, { mainImage: url });
      }
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
    const image = await db.findById("images", imageId, ["publicId"]);
    if (!image) {
      return false;
    }
    const { result } = await deleteImage(image.publicId);
    if (result !== "ok") {
      return false;
    }
    return await db.deleteById("images", imageId);
  },
};
