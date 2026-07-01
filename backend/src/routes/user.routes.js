const express = require("express");

const router = express.Router();

const {
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const {
  protect,
} = require("../middleware/auth.middleware");

const {
  authorize,
} = require("../middleware/role.middleware");

router.use(protect);

router.use(authorize("admin"));

router.get("/", getUsers);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
