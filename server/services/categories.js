import { db } from "../utilities/database.js";

import newCategory from "../models/category.js";

export default {
  categoryIsAvailable: async (
    frName,
    nlName,
    enName,
    deName,
    categoryId = ""
  ) => {
    const categories = await db.find(
      "categories",
      { $or: [{ frName }, { nlName }, { enName }, { deName }] },
      ["_id"]
    );
    for (let category of categories) {
      if (category._id.toString() !== categoryId) {
        return false;
      }
    }
    return true;
  },
  addCategory: async (frName, nlName, enName, deName) => {
    const category = newCategory(frName, nlName, enName, deName);
    return await db.create("categories", category);
  },
  editCategoryName: async (categoryId, frName, nlName, enName, deName) => {
    const update = { frName, nlName, enName, deName };
    return await db.updateById("categories", categoryId, update);
  },
  deleteCategory: async (categoryId) => {
    return await db.deleteById("categories", categoryId);
  },
};
