const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    photoURL: {
      type: String,
      required: true,
    },

    likedArtifacts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Artifact", // Reference to Artifact schema
      },
    ],
    createdArtifacts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Artifact", // Reference to Artifact schema
      },
    ],
    joinedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
