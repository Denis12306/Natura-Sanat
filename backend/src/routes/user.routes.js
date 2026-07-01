const express = require("express");

const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const { protect } = require("../middleware/auth.middleware");

const { authorize } = require("../middleware/role.middleware");

const router = express.Router();

router.get("/", protect, authorize("admin"), getUsers);

router.get("/:id", protect, authorize("admin"), getUserById);

router.put("/:id", protect, authorize("admin"), updateUser);

router.delete("/:id", protect, authorize("admin"), deleteUser);

module.exports = router;
