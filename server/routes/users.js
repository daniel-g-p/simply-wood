import { Router } from "express";

import { tryCatch } from "../middleware/errors.js";
import { isLoggedIn } from "../middleware/authorization.js";

import controller from "../controllers/users.js";

const router = Router();

router.post("/login", tryCatch(controller.login));
router.get("/login", tryCatch(controller.checkLoginStatus));

router
  .route("/admin")
  .get(tryCatch(isLoggedIn), tryCatch(controller.getAdminData))
  .post(tryCatch(isLoggedIn), tryCatch(controller.updateAdminData));

router.post(
  "/change-password",
  tryCatch(isLoggedIn),
  tryCatch(controller.changePassword)
);

router.get("/logout", tryCatch(controller.logout));

export default router;
