const Coupon = require("../../../../models/coupons.model/coupons.model");

const deleteCoupons = async (req, res, next) => {
  try {
    const { id } = req.params;
    const coupon = await Coupon.findById({ _id: id });
    console.log(coupon);
    if (!coupon) {
      return res.status(404).json({ message: "Coupon not found" });
    }
    await coupon.deleteOne();
    return res.status(200).json({
      status: 200,
      success: true,
      message: "Coupon deleted successfully",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = deleteCoupons;
