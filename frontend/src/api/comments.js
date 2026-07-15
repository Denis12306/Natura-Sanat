import api from "./axios";

// Obtenir les commentaires d'un article
export const getComments = async (articleId) => {
  const response = await api.get(
    `/comments?articleId=${articleId}`
  );

  return response.data.comments;
};

// Créer un commentaire
export const createComment = async (articleId, content) => {
  const response = await api.post("/comments", {
    articleId,
    content,
  });

  return response.data.comment;
};
