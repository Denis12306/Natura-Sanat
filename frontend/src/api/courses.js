import api from "./axios";

export const getCourses = async () => {
  const response = await api.get("/courses");
  return response.data.courses;
};

export const getCourseById = async (id) => {
  const response = await api.get(`/courses/${id}`);
  return response.data.course;
};
