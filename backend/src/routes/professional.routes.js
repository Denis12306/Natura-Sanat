const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload.middleware");

const professionalController = require(
  "../controllers/professional.controller"
);

const {
  protect
} = require("../middleware/auth.middleware");

const {
  authorize
} = require("../middleware/role.middleware");

router.get(
  "/",
  professionalController.getProfessionals
);

router.get(
    "/me",
    protect,
    authorize("professional","admin"),
    professionalController.getMyProfile
);

router.get(
  "/:id",
  professionalController.getProfessionalById
);

router.post(
  "/",
  protect,
  authorize("professional","admin"),
  upload.single("image"),
  professionalController.createProfile
);

router.put(
  "/:id",
  protect,
  authorize("professional","admin"),
  upload.single("image"),
  professionalController.updateProfile
);

router.delete(
  "/:id",
  protect,
  authorize("professional","admin"),
  professionalController.deleteProfile
);

module.exports = router;
