const Article = require("../models/Article");
const Course = require("../models/Course");

// Échappe les caractères spéciaux regex pour éviter les erreurs/failles
function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Découpe la recherche en mots-clés, ignore les mots vides
function buildWordConditions(keyword, fields) {
  const words = keyword
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  // Chaque mot doit être trouvé (dans n'importe quel ordre),
  // dans au moins un des champs fournis
  return words.map((word) => {
    const regex = new RegExp(escapeRegex(word), "i");
    return {
      $or: fields.map((field) => ({ [field]: regex })),
    };
  });
}

const search = async (keyword) => {
  if (!keyword || !keyword.trim()) {
    return {
      articles: [],
      courses: [],
    };
  }

  const articleConditions = buildWordConditions(keyword, [
    "title",
    "content",
    "category",
  ]);

  const courseConditions = buildWordConditions(keyword, [
    "title",
    "description",
    "category",
  ]);

  const articles = await Article.find({
    $and: articleConditions,
  }).limit(5);

  const courses = await Course.find({
    $and: courseConditions,
  }).limit(5);

  return {
    articles,
    courses,
  };
};

module.exports = {
  search,
};
