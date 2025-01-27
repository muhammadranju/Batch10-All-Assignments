const { find } = require("../../../../models/products.model/products.model");
const Review = require("../../../../models/reviews.model/reviews.model");

const deleteItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findReview = await Review.findById(id);

    if (!findReview) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Review not found.",
      });
    }

    await findReview.deleteOne();

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Review deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = deleteItem;
