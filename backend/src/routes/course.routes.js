const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload.middleware");

const courseController = require(
  "../controllers/course.controller"
);

const {
  protect
} = require("../middleware/auth.middleware");

const {
  authorize
} = require("../middleware/role.middleware");

// Envoie aux routes des cours indiquées
router.get(
  "/",
  courseController.getCourses);

router.get(
  "/me",
  protect,
  authorize("professional", "admin"),
  courseController.getMyCourses
);

router.get(
  "/:id",
  courseController.getCourseById);

router.post(
  "/",
  protect,
  authorize("professional", "admin"),
  upload.single("image"),
  courseController.createCourse
);

router.put(
  "/:id",
  protect,
  authorize("professional", "admin"),
  upload.single("image"),
  courseController.updateCourse
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  courseController.deleteCourse
);

module.exports = router;
