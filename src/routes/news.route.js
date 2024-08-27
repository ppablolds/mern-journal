import { Router } from "express";
import newsController from "../controllers/news.controller.js";

const router = Router();

router.post("/", newsController.createPostController);
router.get("/", newsController.getAllPostController);

export default router;
