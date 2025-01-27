const router = require("express").Router();
const controllers = require("../../api/v1/auth");

// this route is for registering a new user
router.route("/signup").post(controllers.signup);

// this route is for logging in a user
router.route("/login").post(controllers.login);

router.route("/role/:email").get(controllers.role);

module.exports = router;
