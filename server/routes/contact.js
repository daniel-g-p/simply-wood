import { Router } from "express";

import { tryCatch } from "../middleware/errors.js";

import controller from "../controllers/contact.js";

const router = Router();

router.post("/", tryCatch(controller.sendMessage));

export default router;
