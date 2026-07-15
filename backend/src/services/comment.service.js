const Comment = require("../models/Comment");

// Logique métier des commentaires

// Créer un commentaires
const createComment = async (data, userId) => {
  return Comment.create({
    content: data.content,
    article: data.articleId,
    author: userId
  });
};

// Obtenir les commentaires par articles
const getCommentsByArticle = async (articleId) => {
  return Comment.find({ article: articleId })
    .populate("author", "firstName lastName")
    .sort({ createdAt: -1 });
};

module.exports = {
  createComment,
  getCommentsByArticle
};
