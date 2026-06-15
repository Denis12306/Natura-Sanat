const Course = require("../models/Course");

const createCourse = async (data, authorId) => {
  return Course.create({
    ...data,
    author: authorId
  });
};

const getCourses = async () => {
  return Course.find()
    .populate("author", "firstName lastName");
};

const getCourseById = async (id) => {
  return Course.findById(id)
    .populate("author", "firstName lastName");
};

const updateCourse = async (courseId, user, data) => {
  const course = await Course.findById(courseId);

  if (!course) {
    throw new Error("Course not found");
  }

  const isOwner = course.author.toString() === user._id.toString();
  const isAdmin = user.role === "admin";

  if (!isOwner && !isAdmin) {
    throw new Error("Access denied");
  }

  return Course.findByIdAndUpdate(
    courseId,
    data,
    {
      new: true,
      runValidators: true
    }
  );
};

const deleteCourse = async (courseId, user) => {
  const course = await Course.findById(courseId);

  if (!course) {
    throw new Error("Course not found");
  }

  const isOwner = course.author.toString() === user._id.toString();
  const isAdmin = user.role === "admin";

  if (!isOwner && !isAdmin) {
    throw new Error("Access denied");
  }

  await course.deleteOne();
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse
};
