import api from "./axios";

// Obtenir un cours
export const getCourses = async () => {
  const response = await api.get("/courses");
  return response.data.courses;
};

// Obtenir un cours par l'ID
export const getCourseById = async (id) => {
  const response = await api.get(`/courses/${id}`);
  return response.data.data;
};
