import { Router } from "express";
import newsController from "../controllers/news.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, newsController.createPostController);
router.get("/", newsController.getAllPostController);
router.get("/top", newsController.topPostsController);
router.get("/search", newsController.searchPostsController);

router.get("/:id", authMiddleware, newsController.findPostByIdController);

export default router;
