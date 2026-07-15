const Comment = require("../models/Comment");

const ALLOWED_TYPES = ["Article", "Course", "Professional"];

const createComment = async (data, userId) => {
  const { content, targetType, targetId } = data;

  if (!ALLOWED_TYPES.includes(targetType)) {
    throw new Error("Type de contenu invalide.");
  }

  const comment = await Comment.create({
    content,
    targetType,
    target: targetId,
    author: userId,
  });

  return comment.populate("author", "firstName lastName");
};

const getCommentsByTarget = async (targetType, targetId) => {
  if (!ALLOWED_TYPES.includes(targetType)) {
    throw new Error("Type de contenu invalide.");
  }

  return Comment.find({ targetType, target: targetId })
    .populate("author", "firstName lastName")
    .sort({ createdAt: -1 });
};

const deleteComment = async (commentId, user) => {
  const comment = await Comment.findById(commentId);

  if (!comment) {
    throw new Error("Comment not found");
  }

  const isOwner = comment.author.toString() === user._id.toString();
  const isAdmin = user.role === "admin";

  if (!isOwner && !isAdmin) {
    throw new Error("Access denied");
  }

  await comment.deleteOne();
};

module.exports = {
  createComment,
  getCommentsByTarget,
  deleteComment,
};
