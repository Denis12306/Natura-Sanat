const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment.controller");
const { protect } = require("../middleware/auth.middleware");

router.post("/", protect, commentController.createComment);
router.get("/", commentController.getComments);
router.delete("/:id", protect, commentController.deleteComment);

module.exports = router;
