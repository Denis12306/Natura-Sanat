const articleService = require("../services/article.service");

// Appelle la fonction CreateArticle

const createArticle = async (req, res) => {
  try {
    const article = await articleService.createArticle(
      req.body,
      req.user._id,
      req.file
    );

    res.status(201).json({
      success: true,
      data: article
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Appelle la fonction getArticle
const getArticles = async (req, res) => {
  const articles = await articleService.getArticles();

  res.status(200).json({
    success: true,
    data: articles
  });
};

// Appelle la fonction getArticlebyId
const getArticleById = async (req, res) => {
  const article = await articleService.getArticleById(
    req.params.id
  );

  if (!article) {
    return res.status(404).json({
      success: false,
      message: "Article not found"
    });
  }

  res.status(200).json({
    success: true,
    data: article
  });
};

// Appelle la fonction getMyArticle
const getMyArticles = async (req, res) => {

  const articles = await articleService.getMyArticles(
    req.user._id
  );

  res.json({
    success: true,
    data: articles,
  });

};

// Appelle la fonction updateArticle
const updateArticle = async (req, res) => {
  try {
    const article = await articleService.updateArticle(
      req.params.id,
      req.user,
      req.body,
      req.file
    );

    res.status(200).json({
      success: true,
      data: article
    });

  } catch (error) {
    const status =
      error.message === "Article not found" ? 404 : 403;

    res.status(status).json({
      success: false,
      message: error.message
    });
  }
};

// Appelle la fonction deleteArticle
const deleteArticle = async (req, res) => {
  try {
    await articleService.deleteArticle(
      req.params.id,
      req.user
    );

    res.status(200).json({
      success: true,
      message: "Article deleted successfully"
    });

  } catch (error) {
    const status =
      error.message === "Article not found" ? 404 : 403;

    res.status(status).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createArticle,
  getArticles,
  getArticleById,
  getMyArticles,
  updateArticle,
  deleteArticle
};
