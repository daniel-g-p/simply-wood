import { db } from "../utilities/database.js";

import newCategory from "../models/category.js";

export default {
  categoryIsAvailable: async (categoryName, categoryId = "") => {
    const tag = categoryName.toLowerCase().replaceAll(" ", "-");
    const categoryArray = await db.find("categories", { tag }, ["_id"]);
    const category = categoryArray[0];
    return !category || category._id.toString() === categoryId;
  },
  addCategory: async (categoryName) => {
    const category = newCategory(categoryName);
    return await db.create("categories", category);
  },
};
