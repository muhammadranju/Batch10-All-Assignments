const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    reviewer: {
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
      },
      email: {
        type: String,
        required: true,
      },
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timeseries: true,
  }
);
const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;
