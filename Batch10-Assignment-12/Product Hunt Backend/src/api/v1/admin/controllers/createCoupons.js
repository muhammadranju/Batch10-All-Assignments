const Coupon = require("../../../../models/coupons.model/coupons.model");

const createCoupons = async (req, res, next) => {
  try {
    const { code, description, discount, expiryDate } = req.body;
    console.log(req.body);

    const newCode = code.split(" ").join("").toUpperCase();

    // if (newCode.length !== 6) {
    //   return res.status(400).json({ message: "Invalid code!" });
    // }

    // if (discount === 0 || discount < 100) {
    //   return res.status(400).json({
    //     status: 400,
    //     success: false,
    //     message: "Discount cannot be negative!",
    //   });
    // }

    const newCoupon = new Coupon({
      code: newCode,
      description,
      discount,
      expiryDate,
    });

    await newCoupon.save();
    res.status(201).json({ message: "Coupon created successfully!" });
  } catch (error) {
    next(error);
  }
};

module.exports = createCoupons;
