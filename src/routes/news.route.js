import { Router } from "express";
import newsController from "../controllers/news.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, newsController.createPostController);

router.get("/", newsController.getAllPostController);
router.get("/top", newsController.topPostsController);
router.get("/search", newsController.searchPostsController);
router.get("/byUser", authMiddleware, newsController.getPostUserController);
router.get("/:id", authMiddleware, newsController.findPostByIdController);

router.patch("/:id", authMiddleware, newsController.updatePostController);
router.patch("/like/:id", authMiddleware, newsController.likePostControler);
router.patch(
  "/comment/:id",
  authMiddleware,
  newsController.commentAddControler
);

router.delete("/:id", authMiddleware, newsController.deletePostController);
router.delete("/comment/:idNews/:idComment", authMiddleware, newsController.deleteCommentPostController);

export default router;
