import api from "./axios";

export const getArticles = async () => {
  const response = await api.get("/articles");
  return response.data.articles;
};

export const getArticleById = async (id) => {
  const response = await api.get(`/articles/${id}`);
  return response.data.article;
};
