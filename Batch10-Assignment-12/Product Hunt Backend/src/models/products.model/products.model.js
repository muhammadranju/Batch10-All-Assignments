const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: [String], // Array of strings for tags
      required: true,
    },
    externalLinks: {
      type: String, // URL to the product's external site
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    owner: {
      ownerName: {
        type: String,
        required: true,
      },
      ownerEmail: {
        type: String,
        required: true,
      },
      ownerImage: {
        type: String,
      },
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
    featured: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
    },
  },
  {
    timeseries: true,
  }
);
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
