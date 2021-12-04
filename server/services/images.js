import { db } from "../utilities/database.js";

export default {
  getAllImageCategories: async () => {
    return await db.find("categories", {}, ["name", "tag"]);
  },
};
