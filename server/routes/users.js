import { Router } from "express";

import { tryCatch } from "../middleware/errors.js";

import controller from "../controllers/users.js";

const router = Router();

router.post("/login", tryCatch(controller.login));
router.get("/login", tryCatch(controller.checkLoginStatus));

export default router;
