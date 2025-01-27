const Coupon = require("../../../../models/coupons.model/coupons.model");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const validateCoupon = async (req, res, next) => {
  const { amount, coupon } = req.body;
  try {
    const couponData = await Coupon.findOne({ code: coupon });

    // const { paymentIntent } = await stripe.paymentIntents.create({
    //   amount,
    //   currency: "usd",
    //   automatic_payment_methods: {
    //     enabled: true,
    //   },
    // });

    // console.log(paymentIntent);
    if (couponData) {
      const discountedAmount = couponData.discount;
      let discountAmount = (amount * discountedAmount) / 100;
      let finalAmount = amount - discountAmount;

      const { client_secret } = await stripe.paymentIntents.create({
        amount: finalAmount * 100,
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });
      console.log("paymentIntent", client_secret);

      res.status(200).json({
        status: 200,
        success: true,
        message: "Coupon applied successfully",
        valid: true,
        clientSecret: client_secret,
        discountPrice: finalAmount,
      });
    } else {
      res.status(400).json({
        status: 400,
        success: false,
        message: "Invalid Coupon Code",
        valid: false,
        newAmount: 0,
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = validateCoupon;
