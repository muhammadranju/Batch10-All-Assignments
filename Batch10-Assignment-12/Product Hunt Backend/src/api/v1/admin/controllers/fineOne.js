const Coupon = require("../../../../models/coupons.model/coupons.model");

const findOneCoupon = async (req, res, next) => {
  try {
    const { id } = req.params;
    const coupon = await Coupon.findById({ _id: id });

    if (!coupon) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Coupon not found.",
      });
    }

    console.log(coupon);
    return res.status(200).json({
      status: 200,
      success: true,
      message: "Coupon retrieved successfully.",
      data: coupon,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports = findOneCoupon;
