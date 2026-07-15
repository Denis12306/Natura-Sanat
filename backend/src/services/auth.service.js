const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { generateToken } = require("../config/jwt");

const register = async (userData) => {
  const { firstName, lastName, email, password } = userData;

  // Utilisateur existant ?
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash le mot de passe
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword
  });

  const token = generateToken(user);

  return { user, token };
};

// Réservée aux admins, permet de créer un utilisateur avec un rôle précis
const adminCreateUser = async (userData) => {
  const { firstName, lastName, email, password, role } = userData;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    role: role || "user",
  });

  return user;
};

// Connexion avec email et mot de passe
const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken(user._id);
  return { user, token };
};

module.exports = {
  register,
  adminCreateUser,
  login
};
