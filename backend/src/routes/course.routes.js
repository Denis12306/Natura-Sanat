const express = require("express");

const router = express.Router();

const courseController = require(
  "../controllers/course.controller"
);

const {
  protect
} = require("../middleware/auth.middleware");

const {
  authorize
} = require("../middleware/role.middleware");

router.get("/", courseController.getCourses);

router.get("/:id", courseController.getCourseById);

router.post(
  "/",
  protect,
  authorize("professional", "admin"),
  courseController.createCourse
);

router.put(
  "/:id",
  protect,
  authorize("professional", "admin"),
  courseController.updateCourse
);

router.delete(
  "/:id",
  protect,
  authorize("professional", "admin"),
  courseController.deleteCourse
);

module.exports = router;
