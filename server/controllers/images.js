import image from "../models/image.js";
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
  setMainImage: async (req, res, next) => {
    const { categoryId } = req.params;
    const { imageUrl } = req.body;
    const update = await images.updateMainImage(categoryId, imageUrl);
    if (!update.acknowledged) {
      return res.status(500).json({ message: "Modification échouée." });
    }
    return res.status(200).json({ ok: true });
  },
  deleteImage: async (req, res, next) => {
    const { imageId } = req.body;
    const deleted = await images.deleteImageById(imageId);
    if (!deleted) {
      return res.status(500).json({ message: "Suppression échouée." });
    }
    return res.status(200).json({ ok: true });
  },
};
