const mongoose = require("mongoose");

const professionalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },

    specialty: {
      type: String,
      required: true,
      trim: true
    },

    city: {
      type: String,
      required: true,
      trim: true
    },

    bio: {
      type: String,
      default: ""
    },

    phone: {
      type: String,
      default: ""
    },

    website: {
      type: String,
      default: ""
    },

    profileImage: {
      type: String,
      default: ""
    },

    profileImagePublicId: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Professional",
  professionalSchema
);
