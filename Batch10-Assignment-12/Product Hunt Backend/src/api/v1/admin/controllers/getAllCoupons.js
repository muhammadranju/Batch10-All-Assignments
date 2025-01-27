const Coupon = require("../../../../models/coupons.model/coupons.model");

const getAllCoupons = async (req, res, next) => {
  try {
    // Check if the 'isValidCoupon' query parameter is provided
    const { isValidCoupon } = req.query;

    // Build the filter object for the query
    let filter = {};

    // If isValidCoupon is set to true, filter coupons where the expiry date is greater than the current date
    if (isValidCoupon === "true") {
      const currentDate = new Date();
      filter.expiryDate = { $gte: currentDate }; // Check for coupons that are still valid
    }

    // Fetch coupons with the filter applied (if any) and sort them by _id in descending order
    const coupons = await Coupon.find(filter).sort({ _id: -1 });

    // console.log(coupons);
    return res.status(200).json({
      status: 200,
      success: true,
      message: "Coupons retrieved successfully.",
      data: coupons,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = getAllCoupons;
