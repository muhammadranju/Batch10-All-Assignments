const router = require("express").Router();
const { upvote } = require("../../api/v1/products");

router.route("/upvote").post(upvote);

module.exports = router;
