import { Router } from "express";

const router = Router();

router.post("/login", (req, res, next) => {
  console.log(req);
  return res.json({ ok: true });
});

export default router;
