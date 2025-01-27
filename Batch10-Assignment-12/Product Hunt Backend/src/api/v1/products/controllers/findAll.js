const Product = require("../../../../models/products.model/products.model");

const findAll = async (req, res, next) => {
  try {
    const {
      email,
      featured,
      all,
      page = 1,
      limit = 10,
      search = "",
      sort = "true",

      status,
    } = req.query;

    console.log(req.query);

    const pageNumber = Math.max(parseInt(page), 1);
    const limitNumber = Math.max(parseInt(limit), 1);
    const skip = (pageNumber - 1) * limitNumber;

    console.log(status);

    let productsQuery;

    if (email) {
      productsQuery = Product.find({ "owner.ownerEmail": email }).sort({
        status: { $eq: ["$status", "pending"] } ? -1 : 1,
      });
    } else if (featured) {
      productsQuery = Product.find({ featured: true }).sort({
        status: { $eq: ["$status", "pending"] } ? -1 : 1,
      });
    } else if (all) {
      productsQuery = Product.find().sort({
        status: { $eq: ["$status", "pending"] } ? -1 : 1,
      });
    } else if (search) {
      productsQuery = Product.find({
        tags: { $regex: new RegExp(search, "i") },
        status: "accepted",
      });
    } else if (sort === "true") {
      productsQuery = Product.find({ status: "accepted" }).sort({
        upvotes: -1,
      });
    } else {
      productsQuery = Product.find({ status: "accepted" }).sort({
        _id: -1,
      });
    }

    const products = await productsQuery.skip(skip).limit(limitNumber);
    const total = await Product.countDocuments(productsQuery.getQuery());

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Products retrieved successfully.",
      data: products,
      pagination: {
        total,
        page: pageNumber,
        limit: limitNumber,
        totalPages: Math.ceil(total / limitNumber),
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = findAll;
