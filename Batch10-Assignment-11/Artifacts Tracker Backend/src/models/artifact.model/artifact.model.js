const mongoose = require("mongoose");

const artifactSchema = new mongoose.Schema(
  {
    artifactName: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
      // validate: {
      //   validator: function (v) {
      //     return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/.test(v); // Ensures it's a valid URL
      //   },
      //   message: "Please provide a valid image URL.",
      // },
    },
    artifactType: {
      type: String,
      required: true,
    },
    historicalContext: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
    discoveredAt: {
      type: String,
      required: true,
      trim: true,
    },
    discoveredBy: {
      type: String,
      required: true,
      trim: true,
    },
    presentLocation: {
      type: String,
      required: true,
      trim: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assumes a User schema exists for authentication
      required: true,
    },
    createdAtTimestamp: {
      type: Date,
      default: Date.now, // Tracks the timestamp when the artifact was added to the system
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const Artifact = mongoose.model("Artifact", artifactSchema);

module.exports = Artifact;
