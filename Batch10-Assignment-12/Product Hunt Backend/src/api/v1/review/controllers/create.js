const Review = require("../../../../models/reviews.model/reviews.model");

const create = async (req, res, next) => {
  try {
    const { reviewText, productId, rating, name, image, email } = req.body;

    const review = new Review({
      productId,
      reviewText,
      rating,
      reviewer: {
        name,
        image,
        email,
      },
    });

    await review.save();

    return res.status(201).json({
      status: 201,
      success: true,
      message: "Review created successfully",
      data: review,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = create;
