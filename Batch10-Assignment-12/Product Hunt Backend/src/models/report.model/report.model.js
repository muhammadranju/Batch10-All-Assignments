const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  reporterEmail: {
    type: String,
  },
  reason: {
    type: String,
  },
});

const Report = mongoose.model("Report", ReportSchema);
module.exports = Report;
