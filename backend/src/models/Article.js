const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    content: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    image: {
      type: String,
      default: "",
    },

    imagePublicId: {
      type: String,
      default: "",
    },
    
    published: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Article", articleSchema);
