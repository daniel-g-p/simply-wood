import { Router } from "express";

import { tryCatch } from "../middleware/errors.js";
import { isLoggedIn } from "../middleware/authorization.js";

import controller from "../controllers/images.js";

const router = Router();

router.get(
  "/categories",
  tryCatch(isLoggedIn),
  tryCatch(controller.getImageCategories)
);

export default router;
