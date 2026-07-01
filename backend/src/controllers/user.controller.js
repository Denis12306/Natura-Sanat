const User = require("../models/User");

const getUsers = async (req, res) => {
  const users = await User.find().select("-password");

  res.json({
    success: true,
    data: users,
  });
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
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
