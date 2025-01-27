const Review = require("../../../../models/reviews.model/reviews.model");

const findAll = async (req, res, next) => {
  try {
    const { id } = req.params;

    const findReviews = await Review.find({ productId: id }).sort({
      _id: -1,
    });

    console.log(findReviews);
    return res.status(200).json({
      status: 200,
      success: true,
      message: "Reviews retrieved successfully",
      data: findReviews,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = findAll;
