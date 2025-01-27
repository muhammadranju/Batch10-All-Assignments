const router = require("express").Router();
const products = require("../../api/v1/products");
const authMiddleware = require("../../middleware/authMiddleware");

router.route("/products").get(products.findAll);
router.route("/products/statistics").get(products.statistics);
router.route("/products/:id").get(products.findOne);
router.route("/products").post(authMiddleware, products.create);
router.route("/products/:id").put(authMiddleware, products.update);
router.route("/products/:id").patch(authMiddleware, products.upvote);
router.route("/products/:id").delete(authMiddleware, products.deleteItem);
router.route("/products/report/:id").post(authMiddleware, products.report);
router
  .route("/products/report/all")
  .get(authMiddleware, products.findAllReports);
router
  .route("/products/report/:id")
  .delete(authMiddleware, products.handelReportDelete);

router.route("/featured/products").get(products.featuredProducts);

module.exports = router;
