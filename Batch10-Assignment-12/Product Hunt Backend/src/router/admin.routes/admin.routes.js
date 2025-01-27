const router = require("express").Router();

const adminControllers = require("../../api/v1/admin");
const authMiddleware = require("../../middleware/authMiddleware");

router.route("/admin/users").get();
router
  .route("/admin/coupons")
  .post(authMiddleware, adminControllers.createCoupons);
router.route("/admin/coupons").get(adminControllers.getAllCoupons);
router
  .route("/admin/coupons/:id")
  .get(authMiddleware, adminControllers.findOneCoupon);
router
  .route("/admin/coupons/:id")
  .put(authMiddleware, adminControllers.updateCoupons);

router
  .route("/admin/coupons/validate-coupon")
  .post(authMiddleware, adminControllers.validateCoupon);

router
  .route("/admin/coupons/:id")
  .delete(authMiddleware, adminControllers.deleteCoupons);

router.route("/admin/users/:email").get();
router
  .route("/admin/users/:email")
  .put(authMiddleware, adminControllers.usersManage);

module.exports = router;
