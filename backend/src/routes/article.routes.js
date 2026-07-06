const express = require("express");

const router = express.Router();

const articleController = require("../controllers/article.controller");

const {protect} = require("../middleware/auth.middleware");

const {authorize} = require("../middleware/role.middleware");

const upload = require("../middleware/upload.middleware");

router.get("/", articleController.getArticles);

router.get(
  "/me",
  protect,
  authorize("professional", "admin"),
  articleController.getMyArticles
);

router.get("/:id", articleController.getArticleById);

router.post(
  "/",
  protect,
  authorize("professional", "admin"),
  upload.single("image"),
  articleController.createArticle
);

router.put(
  "/:id",
  protect,
  authorize("professional", "admin"),
  upload.single("image"),
  articleController.updateArticle
);

router.delete(
  "/:id",
  protect,
  authorize("professional", "admin"),
  articleController.deleteArticle
);

module.exports = router;
