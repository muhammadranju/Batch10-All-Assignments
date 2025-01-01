const router = require("express").Router();
const controllers = require("../../api/v1/auth");

// this route is for registering a new user
router.route("/register").post(controllers.register);

// this route is for logging in a user
router.route("/login").post(controllers.login);

module.exports = router;
