const professionalService = require(
  "../services/professional.service"
);

const createProfile = async (req, res) => {
  try {
    const profile = await professionalService.createProfile(
      req.body,
      req.user._id
    );

    res.status(201).json({
      success: true,
      data: profile
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const getProfessionals = async (req, res) => {
  const professionals =
    await professionalService.getProfessionals();

  res.status(200).json({
    success: true,
    data: professionals
  });
};

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

const updateProfile = async (req, res) => {
  try {
    const profile =
      await professionalService.updateProfile(
        req.params.id,
        req.user,
        req.body
      );

    res.status(200).json({
      success: true,
      data: profile
    });

  } catch (error) {
    const status =
      error.message === "Profile not found" ? 404 : 403;

    res.status(status).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createProfile,
  getProfessionals,
  getProfessionalById,
  updateProfile
};
