import api from "./axios";

export const getComments = async (articleId) => {
  const response = await api.get(
    `/comments?articleId=${articleId}`
  );

  return response.data.comments;
};

export const createComment = async (articleId, content) => {
  const response = await api.post("/comments", {
    articleId,
    content,
  });

  return response.data.comment;
};
