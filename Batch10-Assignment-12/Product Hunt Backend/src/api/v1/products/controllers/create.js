const Product = require("../../../../models/products.model/products.model");
const slugify = require("slugify");
const User = require("../../../../models/users.model/users.model");
const create = async (req, res, next) => {
  try {
    const {
      productName,
      productImage,
      description,
      ownerName,
      ownerEmail,
      ownerImage,
      tags,
      externalLink,
      createdAt,
    } = req.body;
    if (
      !productName ||
      !productImage ||
      !description ||
      !ownerName ||
      !ownerEmail ||
      !ownerImage ||
      !tags ||
      !externalLink
    ) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Please provide all required fields.",
      });
    }
    const findUser = await User.findById({ _id: req.user.id });

    if (findUser.productAddLimit === 0) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "You have reached the limit of products you can add.",
      });
    }

    const product = new Product({
      productName,
      productImage,
      description,
      owner: {
        ownerName,
        ownerEmail,
        ownerImage,
      },
      tags,
      externalLinks: externalLink,
      createdAt,
      slug: slugify(productName),
    });
    findUser.productAddLimit -= 1;
    await findUser.save();
    await product.save();

    console.log(req.user);
    console.log(product);

    return res.status(201).json({
      status: 201,
      success: true,
      message: "Product created successfully.",
      data: product,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = create;
