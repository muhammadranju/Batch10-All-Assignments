const Product = require("../../../../models/products.model/products.model");

const findOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ slug: id });

    if (!product) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Product not found.",
      });
    }

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Product retrieved successfully.",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = findOne;
