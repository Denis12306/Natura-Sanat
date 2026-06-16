const express = require("express");

const router = express.Router();

const streamifier = require("streamifier");

const upload = require("../middleware/upload.middleware");
const cloudinary = require("../config/cloudinary");

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

router.post(
  "/upload",
  protect,
  authorize("professional", "admin"),
  upload.single("image"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "No file uploaded"
        });
      }

      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "natura-sanat"
        },
        (error, result) => {
          if (error) {
            return res.status(500).json({
              success: false,
              message: error.message
            });
          }

          return res.status(200).json({
            success: true,
            imageUrl: result.secure_url
          });
        }
      );

      streamifier
        .createReadStream(req.file.buffer)
        .pipe(uploadStream);

    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
);

module.exports = router;
