const Coupon = require("../../../../models/coupons.model/coupons.model");

const updateCoupons = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { code, description, discount, expiryDate } = req.body;

    if (!id) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Please provide a valid coupon ID.",
      });
    }

    const coupon = await Coupon.findById(id);

    if (!coupon) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Coupon not found.",
      });
    }

    coupon.code = code;
    coupon.description = description;
    coupon.discount = discount;
    coupon.expiryDate = expiryDate;

    console.log(coupon);
    await coupon.save();

    res.status(200).json({
      status: 200,
      success: true,
      message: "Coupon updated successfully.",
      data: coupon,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateCoupons;
