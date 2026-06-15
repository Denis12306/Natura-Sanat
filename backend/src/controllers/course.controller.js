const courseService = require("../services/course.service");

const createCourse = async (req, res) => {
  try {
    const course = await courseService.createCourse(
      req.body,
      req.user._id
    );

    res.status(201).json({
      success: true,
      data: course
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
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
    const course = await courseService.updateCourse(
      req.params.id,
      req.user,
      req.body
    );

    res.status(200).json({
      success: true,
      data: course
    });

  } catch (error) {
    const status =
      error.message === "Course not found" ? 404 : 403;

    res.status(status).json({
      success: false,
      message: error.message
    });
  }
};

const deleteCourse = async (req, res) => {
  try {
    await courseService.deleteCourse(
      req.params.id,
      req.user
    );

    res.status(200).json({
      success: true,
      message: "Course deleted successfully"
    });

  } catch (error) {
    const status =
      error.message === "Course not found" ? 404 : 403;

    res.status(status).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse
};
