import images from "../services/images.js";
import categories from "../services/categories.js";

export default {
  addImages: async (req, res, next) => {
    const { categoryId } = req.params;
    const { files } = req;
    await images.uploadImages(categoryId, files);
    return res.status(200).json({ ok: true });
  },
  addCategory: async (req, res, next) => {
    const { categoryName } = req.body;
    const isAvailable = await categories.categoryIsAvailable(categoryName);
    if (!isAvailable) {
      return res
        .status(400)
        .json({ message: "Il existe déjà une catégorie avec ce nom." });
    }
    const insertion = await categories.addCategory(categoryName);
    if (!insertion.acknowledged) {
      return res.status(500).json({ message: "Une erreur s'est produite." });
    }
    return res.status(200).json({ ok: true });
  },
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
    const result = await images.deleteImageById(imageId);
    if (!result) {
      return res.status(500).json({ message: "Suppression échouée." });
    }
    return res.status(200).json({ ok: true });
  },
};
