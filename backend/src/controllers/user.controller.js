const User = require("../models/User");

const getUsers = async (req, res) => {
  const users = await User.find().select("-password");

  res.json({
    success: true,
    data: users,
  });
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
  updateUser,
  deleteUser,
};
