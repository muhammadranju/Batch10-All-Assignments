const Product = require("../../../../models/products.model/products.model");

const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const {
      productName,
      productImage,
      description,
      tags,
      externalLinks,
      status,
      featured,
    } = req.body;

    console.log(req.body);
    const product = await Product.findById({ _id: id });

    if (!product) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Product not found",
      });
    }

    if (product.status === "accepted") {
      product.featured = featured;
    }

    product.productName = productName ?? product.productName;
    product.productImage = productImage ?? product.productImage;
    product.description = description ?? product.description;
    product.tags = tags ?? product.tags;
    product.externalLinks = externalLinks ?? product.externalLinks;
    product.status = status ?? product.status;

    await product.save();

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Product Update successfully!",
      data: product,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports = update;
