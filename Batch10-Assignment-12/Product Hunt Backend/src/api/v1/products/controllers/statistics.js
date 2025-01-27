const Product = require("../../../../models/products.model/products.model");
const User = require("../../../../models/users.model/users.model");
const Review = require("../../../../models/reviews.model/reviews.model");

const getStatistics = async (req, res, next) => {
  try {
    const statistics = await Promise.all([
      // Aggregate accepted, pending, and rejected products
      Product.aggregate([
        {
          $group: {
            _id: "$status",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            status: "$_id",
            count: 1,
          },
        },
      ]),

      // Aggregate total products count
      Product.countDocuments(),

      // Aggregate total reviews
      Review.aggregate([
        {
          $count: "totalReviews",
        },
      ]),

      // Aggregate total users
      User.aggregate([
        {
          $group: {
            _id: "$role",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            role: "$_id",
            count: 1,
          },
        },
      ]),
    ]);

    const [productStats, totalProducts, reviewStats, userStats] = statistics;

    // Format the response data
    const formattedStats = {
      products: {
        total: totalProducts,
        accepted:
          productStats.find((stat) => stat.status === "accepted")?.count || 0,
        pending:
          productStats.find((stat) => stat.status === "pending")?.count || 0,
        rejected:
          productStats.find((stat) => stat.status === "rejected")?.count || 0,
      },
      reviews: reviewStats[0]?.totalReviews || 0,
      users: {
        total: userStats.reduce((acc, curr) => acc + curr.count, 0),
        breakdown: userStats.reduce((acc, curr) => {
          acc[curr.role] = curr.count;
          return acc;
        }, {}),
      },
    };

    res.status(200).json({
      status: 200,
      success: true,
      message: "Statistics retrieved successfully.",
      data: formattedStats,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getStatistics;
