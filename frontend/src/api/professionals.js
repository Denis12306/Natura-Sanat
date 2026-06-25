import api from "./axios";

export const getProfessionals = async () => {
  const response = await api.get("/professionals");

  return response.data.professionals;
};

export const getProfessionalById = async (id) => {
  const response = await api.get(`/professionals/${id}`);

  return response.data.professional;
};
