const Professional = require("../models/Professional");

const {
  uploadImage,
  deleteImage,
} = require("../services/cloudinary.service");


const professionalService = require(
  "../services/professional.service"
);

// Appelle la fonction createProfile
const createProfile = async (req, res) => {
  try {
    let profileImage = "";
    let profileImagePublicId = "";

    if (req.file) {
      const uploaded = await uploadImage(
        req.file.buffer,
        "professionals"
      );
      profileImage = uploaded.secure_url;
      profileImagePublicId = uploaded.public_id;
    }

    // Un admin peut créer la fiche pour un autre utilisateur en précisant "userId"
    // Sinon, la fiche est créée pour l'utilisateur connecté (comportement inchangé)
    let targetUserId = req.user._id;
    if (req.user.role === "admin" && req.body.userId) {
      targetUserId = req.body.userId;
    }

    const profile =
      await professionalService.createProfile(
        {
          ...req.body,
          profileImage,
          profileImagePublicId,
        },
        targetUserId
      );

    res.status(201).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Appelle la fonction getProfessionals
const getProfessionals = async (req, res) => {
  const professionals =
  await professionalService.getProfessionals(
    req.query
  );

  res.status(200).json({
    success: true,
    data: professionals
  });
};

// Appelle la fonction getMyProfile
const getMyProfile = async (req,res)=>{

    const profile =
        await professionalService.getMyProfile(
            req.user._id
        );

    res.json({
        success:true,
        data:profile
    });

};

// Appelle la fonction getProfessionalById
const getProfessionalById = async (req, res) => {
  const profile =
    await professionalService.getProfessionalById(
      req.params.id
    );

  if (!profile) {
    return res.status(404).json({
      success: false,
      message: "Profile not found"
    });
  }

  res.status(200).json({
    success: true,
    data: profile
  });
};

// Appelle la fonction updateProfile
const updateProfile = async (req, res) => {

  try {

    const profile =
      await Professional.findById(req.params.id);

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profil introuvable",
      });
    }

    let data = {
      ...req.body,
    };

    if (req.file) {

      if (profile.profileImagePublicId) {
        await deleteImage(
          profile.profileImagePublicId
        );
      }

      const uploaded = await uploadImage(
        req.file.buffer,
        "professionals"
      );

      data.profileImage = uploaded.secure_url;
      data.profileImagePublicId =
        uploaded.public_id;
    }

    const updated =
      await professionalService.updateProfile(
        req.params.id,
        req.user,
        data
      );

    res.json({
      success: true,
      data: updated,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }

};

// Appelle la fonction deleteProfile
const deleteProfile = async (req, res) => {

  try {

    await professionalService.deleteProfile(
      req.params.id,
      req.user
    );

    res.json({
      success: true,
      message: "Profil supprimé"
    });

  } catch(error){

    res.status(400).json({
      success:false,
      message:error.message
    });

  }

};

module.exports = {
  createProfile,
  getProfessionals,
  getMyProfile,
  getProfessionalById,
  updateProfile,
  deleteProfile
};
