const Article = require("../models/Article");
const cloudinary = require("../config/cloudinary");

// Permet de télécharger via Cloudinary
function uploadToCloudinary(buffer) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "articles" },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    stream.end(buffer);
  });
}

// Logique métier de la crétion d'un article

const createArticle = async (data, authorId, file) => {
  let imageData = {};

  if (file) {
    const result = await uploadToCloudinary(file.buffer);
    imageData = {
      image: result.secure_url,
      imagePublicId: result.public_id,
    };
  }

  return Article.create({
    ...data,
    ...imageData,
    author: authorId,
  });
};

// Obtenir l'article
const getArticles = async () => {
  return Article.find().populate("author", "firstName lastName");
};

// Obtenir l'article par l'ID
const getArticleById = async (id) => {
  return Article.findById(id).populate("author", "firstName lastName");
};

// Obtenir mon article
const getMyArticles = async (userId) => {
  return Article.find({ author: userId }).populate(
    "author",
    "firstName lastName"
  );
};

// Mettre à jour l'article
const updateArticle = async (articleId, user, data, file) => {
  const article = await Article.findById(articleId);

  if (!article) {
    throw new Error("Article not found");
  }

  const isOwner = article.author.toString() === user._id.toString();
  const isAdmin = user.role === "admin";

  if (!isOwner && !isAdmin) {
    throw new Error("Access denied");
  }

  let updateData = { ...data };

  if (file) {
    if (article.imagePublicId) {
      await cloudinary.uploader.destroy(article.imagePublicId);
    }

    const result = await uploadToCloudinary(file.buffer);
    updateData.image = result.secure_url;
    updateData.imagePublicId = result.public_id;
  }

  return Article.findByIdAndUpdate(articleId, updateData, {
    new: true,
    runValidators: true,
  });
};

// Supprimer l'article
const deleteArticle = async (articleId, user) => {
  const article = await Article.findById(articleId);

  if (!article) {
    throw new Error("Article not found");
  }

  const isOwner = article.author.toString() === user._id.toString();
  const isAdmin = user.role === "admin";

  if (!isOwner && !isAdmin) {
    throw new Error("Access denied");
  }

  if (article.imagePublicId) {
    await cloudinary.uploader.destroy(article.imagePublicId);
  }

  await article.deleteOne();
};

module.exports = {
  createArticle,
  getArticles,
  getArticleById,
  getMyArticles,
  updateArticle,
  deleteArticle,
};
