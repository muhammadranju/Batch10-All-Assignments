const Product = require("../../../../models/products.model/products.model");
const Upvote = require("../../../../models/upvote.model/upvote.model");

const upvote = async (req, res, next) => {
  try {
    const { productId, userEmail } = req.body;
    const findProduct = await Product.findById(req.params.id);
    const findUpvote = await Upvote.findOne({
      $and: [{ productId: req.params.id }, { userEmail: userEmail }],
    });

    // console.log(findUpvote);

    if (!findProduct) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Product not found",
      });
    }
    if (!findUpvote) {
      findProduct.upvotes = findProduct.upvotes + 1;
      const upvote = new Upvote({
        productId,
        userEmail,
      });
      console.log("Upvote created", upvote);
      await upvote.save();
      await findProduct.save();
    }

    if (findUpvote) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "You already upvoted this product",
      });
    }

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Upvote successful",
      data: findProduct,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = upvote;
