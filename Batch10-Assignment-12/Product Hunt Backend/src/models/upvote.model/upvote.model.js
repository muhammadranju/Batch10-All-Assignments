const mongoose = require("mongoose");

const upvoteScheme = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  userEmail: {
    type: String,
  },
});

const Upvote = mongoose.model("Upvote", upvoteScheme);

module.exports = Upvote;
