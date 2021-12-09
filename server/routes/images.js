import { Router } from "express";

import { tryCatch } from "../middleware/errors.js";
import { isLoggedIn } from "../middleware/authorization.js";
import { uploadFiles } from "../middleware/multer.js";

import controller from "../controllers/images.js";

const router = Router();

router.get(
  "/categories",
  tryCatch(isLoggedIn),
  tryCatch(controller.getImageCategories)
);

router.post(
  "/categories",
  tryCatch(isLoggedIn),
  tryCatch(controller.addCategory)
);

router.get("/categories/:categoryId", tryCatch(controller.getImagesInCategory));

router.put(
  "/categories/:categoryId",
  tryCatch(isLoggedIn),
  tryCatch(controller.editCategoryName)
);

router.post(
  "/upload-images/:categoryId",
  uploadFiles,
  tryCatch(controller.addImages)
);

router.post(
  "/categories/set-main-image/:categoryId",
  tryCatch(isLoggedIn),
  tryCatch(controller.setMainImage)
);

router.delete(
  "/:imageId",
  tryCatch(isLoggedIn),
  tryCatch(controller.deleteImage)
);

export default router;
