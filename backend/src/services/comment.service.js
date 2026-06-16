const Comment = require("../models/Comment");

const createComment = async (data, userId) => {
  return Comment.create({
    content: data.content,
    article: data.articleId,
    author: userId
  });
};

const getCommentsByArticle = async (articleId) => {
  return Comment.find({ article: articleId })
    .populate("author", "firstName lastName")
    .sort({ createdAt: -1 });
};

module.exports = {
  createComment,
  getCommentsByArticle
};
