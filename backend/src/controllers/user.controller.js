const User = require("../models/User");
const authService = require("../services/auth.service"); // ← ligne manquante, ajoutée ici

const getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json({
    success: true,
    data: users,
  });
};

const createUser = async (req, res) => {
  try {
    const user = await authService.adminCreateUser(req.body);
    const userWithoutPassword = await User.findById(user._id).select("-password");
    res.status(201).json({
      success: true,
      data: userWithoutPassword,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Utilisateur introuvable",
      });
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  ).select("-password");
  res.json({
    success: true,
    data: user,
  });
};

const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({
    success: true,
    message: "Utilisateur supprimé",
  });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
