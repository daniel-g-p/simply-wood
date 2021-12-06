import { db } from "../utilities/database.js";

export default {
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
};
