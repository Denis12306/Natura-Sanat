import api from "./axios";

// Obtenir un professionnel
export const getProfessionals = async () => {
  const response = await api.get("/professionals");

  return response.data.professionals;
};

// Obtenir un professionnel par l'ID
export const getProfessionalById = async (id) => {
  const response = await api.get(`/professionals/${id}`);

  return response.data.professional;
};
