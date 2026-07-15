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
  try {
    const { targetType, targetId } = req.query;

    const comments = await commentService.getCommentsByTarget(
      targetType,
      targetId
    );

    res.status(200).json({
      success: true,
      data: comments
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const deleteComment = async (req, res) => {
  try {
    await commentService.deleteComment(req.params.id, req.user);

    res.status(200).json({
      success: true,
      message: "Commentaire supprimé"
    });
  } catch (error) {
    const status = error.message === "Comment not found" ? 404 : 403;
    res.status(status).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createComment,
  getComments,
  deleteComment
};
