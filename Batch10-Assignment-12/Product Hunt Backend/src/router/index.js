const router = require("express").Router();
const authRoutes = require("./auth.routes/auth.routes");
const productRoutes = require("./product.routes/product.routes");
const userRoutes = require("./user.routes/user.routes");
const adminRoutes = require("./admin.routes/admin.routes");
const reviewRoutes = require("./review.routes/review.routes");
const createPayment = require("../api/v1/admin/controllers/createPayment");

// const  = require("./admin.routes/admin.routes");

router.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    success: true,
    message: "Welcome to Product Hunt  API!",
  });
});

router.use("/api/auth", authRoutes);
router.use("/api", productRoutes);
router.use("/api", userRoutes);
router.use("/api", adminRoutes);
router.use("/api", reviewRoutes);
router.use("/create-payment-intent", createPayment);

module.exports = router;
