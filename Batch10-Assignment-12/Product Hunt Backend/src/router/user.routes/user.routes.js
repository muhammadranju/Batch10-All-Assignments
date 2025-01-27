const router = require("express").Router();
const user = require("../../api/v1/users");

router.route("/users").get(user.findAll);
router.route("/users/:id").put(user.update);

module.exports = router;
