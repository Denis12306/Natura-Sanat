const Article = require("../models/Article");

const createArticle = async (data, authorId) => {
  return Article.create({
    ...data,
    author: authorId
  });
};

const getArticles = async () => {
  return Article.find()
    .populate("author", "firstName lastName");
};

const getArticleById = async (id) => {
  return Article.findById(id)
    .populate("author", "firstName lastName");
};

const updateArticle = async (articleId, user, data) => {
  const article = await Article.findById(articleId);

  if (!article) {
    throw new Error("Article not found");
  }

  const isOwner =
    article.author.toString() === user._id.toString();

  const isAdmin = user.role === "admin";

  if (!isOwner && !isAdmin) {
    throw new Error("Access denied");
  }

  return Article.findByIdAndUpdate(
    articleId,
    data,
    {
      new: true,
      runValidators: true
    }
  );
};

const deleteArticle = async (articleId, user) => {
  const article = await Article.findById(articleId);

  if (!article) {
    throw new Error("Article not found");
  }

  const isOwner =
    article.author.toString() === user._id.toString();

  const isAdmin = user.role === "admin";

  if (!isOwner && !isAdmin) {
    throw new Error("Access denied");
  }

  await article.deleteOne();
};

module.exports = {
  createArticle,
  getArticles,
  getArticleById,
  updateArticle,
  deleteArticle
};
