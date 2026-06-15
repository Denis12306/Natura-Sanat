const express = require("express");

const router = express.Router();

const articleController = require(
  "../controllers/article.controller"
);

const {
  protect
} = require("../middleware/auth.middleware");

const {
  authorize
} = require("../middleware/role.middleware");

router.get("/", articleController.getArticles);

router.get("/:id", articleController.getArticleById);

router.post(
  "/",
  protect,
  authorize("professional", "admin"),
  articleController.createArticle
);

router.put(
  "/:id",
  protect,
  authorize("professional", "admin"),
  articleController.updateArticle
);

router.delete(
  "/:id",
  protect,
  authorize("professional", "admin"),
  articleController.deleteArticle
);

module.exports = router;
