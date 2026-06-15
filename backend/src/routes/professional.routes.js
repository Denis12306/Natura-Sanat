const express = require("express");

const router = express.Router();

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
  "/:id",
  professionalController.getProfessionalById
);

router.post(
  "/",
  protect,
  authorize("professional", "admin"),
  professionalController.createProfile
);

router.put(
  "/:id",
  protect,
  authorize("professional", "admin"),
  professionalController.updateProfile
);

module.exports = router;
