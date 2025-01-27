const router = require("express").Router();

const reviews = require("../../api/v1/review");
const authMiddleware = require("../../middleware/authMiddleware");

router.route("/reviews/:id").get(reviews.findAll);
router.route("/reviews").get(reviews.findAllReviews);
router.route("/reviews").post(authMiddleware, reviews.create);
router.route("/reviews/:id").delete(reviews.deleteItem);

module.exports = router;
