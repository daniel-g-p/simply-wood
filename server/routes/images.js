import { Router } from "express";

import { tryCatch } from "../middleware/errors.js";
import { isLoggedIn } from "../middleware/authorization.js";
import { uploadFiles } from "../middleware/multer.js";

import controller from "../controllers/images.js";

const router = Router();

router
  .route("/categories")
  .get(tryCatch(isLoggedIn), tryCatch(controller.getImageCategories))
  .post(tryCatch(isLoggedIn), tryCatch(controller.addCategory));

router
  .route("/categories/:categoryId")
  .get(tryCatch(controller.getImagesInCategory))
  .put(tryCatch(isLoggedIn), tryCatch(controller.editCategoryNames))
  .delete(tryCatch(isLoggedIn), tryCatch(controller.deleteCategory));


router.post(
  "/upload-images/:categoryId",
  uploadFiles,
  tryCatch(isLoggedIn),
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
