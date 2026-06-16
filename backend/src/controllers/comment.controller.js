const commentService = require("../services/comment.service");

const createComment = async (req, res) => {
  try {
    const comment = await commentService.createComment(
      req.body,
      req.user._id
    );

    res.status(201).json({
      success: true,
      data: comment
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const getComments = async (req, res) => {
  const comments =
    await commentService.getCommentsByArticle(
      req.query.articleId
    );

  res.status(200).json({
    success: true,
    data: comments
  });
};

module.exports = {
  createComment,
  getComments
};
