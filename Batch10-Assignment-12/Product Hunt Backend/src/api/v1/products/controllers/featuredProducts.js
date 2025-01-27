const Product = require("../../../../models/products.model/products.model");

const featuredProducts = async (req, res, next) => {
  try {
    const findProduct = await Product.find({ featured: true }).sort({
      _id: -1,
    });
    console.log(findProduct);
    return res.status(200).json({
      status: 200,
      success: true,
      message: "Featured products retrieved successfully.",
      data: findProduct,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = featuredProducts;
