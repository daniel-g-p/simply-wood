import images from "../services/images.js";

export default {
  getImageCategories: async (req, res, next) => {
    const categories = await images.getAllImageCategories();
    return res.status(200).json({ categories });
  },
  getImagesInCategory: async (req, res, next) => {
    const { categoryId } = req.params;
    const categoryImages = await images.getImagesByCategoryId(categoryId);
    return res.status(200).json({ images: categoryImages });
  },
};
