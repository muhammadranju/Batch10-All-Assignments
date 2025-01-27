const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createPayment = async (req, res, next) => {
  const { amount, coupon } = req.body;
  try {
    const { paymentIntent } = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
      metadata: {
        coupon,
      },
    });
    res.status(200).json({
      status: 200,
      success: true,
      message: "Payment created successfully",
      paymentIntent,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createPayment;
