const Product = require("../../../../models/products.model/products.model");

const deleteItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findProduct = await Product.findById(id);

    if (!findProduct) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Product not found.",
      });
    }

    console.log(findProduct);

    await findProduct.deleteOne();

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Product deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = deleteItem;
