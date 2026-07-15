import api from "./axios";

// Récupérer tous les articles
export const getArticles = async () => {
  const response = await api.get("/articles");
  return response.data.articles;
};

// Récupérer un article spécifique par son ID
export const getArticleById = async (id) => {
  const response = await api.get(`/articles/${id}`);
  return response.data.article;
};
