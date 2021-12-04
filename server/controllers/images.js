import images from "../services/images.js";

export default {
  getImageCategories: async (req, res, next) => {
    const categories = await images.getAllImageCategories();
    return res.status(200).json({ categories });
  },
};
