const Professional = require("../models/Professional");

const {
  deleteImage,
} = require("./cloudinary.service");

const createProfile = async (data, userId) => {
  const existingProfile = await Professional.findOne({
    user: userId
  });

  if (existingProfile) {
    throw new Error("Profile already exists");
  }

  return Professional.create({
    ...data,
    user: userId
  });
};

const getMyProfile = async (userId) => {

  return Professional.findOne({
    user: userId
  }).populate(
    "user",
    "firstName lastName email"
  );

};

const getProfessionals = async (filters) => {
  const query = {};

  if (filters.city) {
    query.city = new RegExp(filters.city, "i");
  }

  if (filters.specialty) {
    query.specialty = new RegExp(
      filters.specialty,
      "i"
    );
  }

  return Professional.find(query)
    .populate("user", "firstName lastName email");
};
const getProfessionalById = async (id) => {
  return Professional.findById(id)
    .populate("user", "firstName lastName email");
};


const updateProfile = async (profileId, user, data) => {
  const profile = await Professional.findById(profileId);

  if (!profile) {
    throw new Error("Profile not found");
  }

  const isOwner =
    profile.user.toString() === user._id.toString();

  const isAdmin = user.role === "admin";

  if (!isOwner && !isAdmin) {
    throw new Error("Access denied");
  }

  return Professional.findByIdAndUpdate(
    profileId,
    data,
    {
      new: true,
      runValidators: true
    }
  );
};

const deleteProfile = async (profileId, user) => {

  const profile =
    await Professional.findById(profileId);

  if (!profile) {
    throw new Error("Profile not found");
  }

  const isOwner =
    profile.user.toString() === user._id.toString();

  const isAdmin =
    user.role === "admin";

  if (!isOwner && !isAdmin) {
    throw new Error("Access denied");
  }

  if (profile.profileImagePublicId) {
    await deleteImage(
      profile.profileImagePublicId
    );
  }

  await profile.deleteOne();

};

module.exports = {
  createProfile,
  getProfessionals,
  getMyProfile,
  getProfessionalById,
  updateProfile,
  deleteProfile
};
