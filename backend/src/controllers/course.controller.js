const courseService = require("../services/course.service");
const Course = require("../models/Course");

const {
  uploadImage,
  deleteImage,
} = require("../services/cloudinary.service");

const createCourse = async (req, res) => {
  try {

    let image = "";
    let imagePublicId = "";

    if (req.file) {

      const uploaded = await uploadImage(
        req.file.buffer,
        "courses"
      );

      image = uploaded.secure_url;
      imagePublicId = uploaded.public_id;

    }

    const course = await courseService.createCourse(
      {
        ...req.body,
        image,
        imagePublicId,
      },
      req.user._id
    );

    res.status(201).json({
      success: true,
      data: course,
    });

  } catch (error) {

    console.error(error);

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};

const getCourses = async (req, res) => {
  const courses = await courseService.getCourses();

  res.status(200).json({
    success: true,
    data: courses
  });
};


const getMyCourses = async (req, res) => {

  const courses = await courseService.getMyCourses(req.user._id);

  res.json({
    success: true,
    data: courses,
  });

};

const getCourseById = async (req, res) => {
  const course = await courseService.getCourseById(
    req.params.id
  );

  if (!course) {
    return res.status(404).json({
      success: false,
      message: "Course not found"
    });
  }

  res.status(200).json({
    success: true,
    data: course
  });
};

const updateCourse = async (req, res) => {
  try {

    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Cours introuvable",
      });
    }

    let data = {
      ...req.body,
    };

    if (req.file) {

      if (course.imagePublicId) {
        await deleteImage(course.imagePublicId);
      }

      const uploaded = await uploadImage(
        req.file.buffer,
        "courses"
      );

      data.image = uploaded.secure_url;
      data.imagePublicId = uploaded.public_id;
    }

    const updatedCourse = await courseService.updateCourse(
      req.params.id,
      req.user,
      data
    );

    res.json({
      success: true,
      data: updatedCourse,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};

const deleteCourse = async (req, res) => {
  try {

    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Cours introuvable",
      });
    }

    if (course.imagePublicId) {
      await deleteImage(course.imagePublicId);
    }

    await courseService.deleteCourse(
      req.params.id,
      req.user
    );

    res.json({
      success: true,
      message: "Cours supprimé",
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  createCourse,
  getCourses,
  getMyCourses,
  getCourseById,
  updateCourse,
  deleteCourse
};
