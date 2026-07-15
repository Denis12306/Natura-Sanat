const authService = require("../services/auth.service");

// Appelle la fonction register

const register = async (req, res) => {
  try {
    const result = await authService.register(req.body);

    res.status(201).json({
      success: true,
      data: result
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Appelle la fonction login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await authService.login(
      email,
      password
    );

    res.status(200).json({
      success: true,
      data: result
    });

  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message
    });
  }
};

// Appelle la fonction getMe
const getMe = async (req, res) => {
  res.status(200).json({
    success: true,
    data: req.user
  });
};

module.exports = {
  register,
  login,
  getMe
};
