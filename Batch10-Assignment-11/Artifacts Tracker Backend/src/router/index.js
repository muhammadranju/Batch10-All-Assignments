const router = require("express").Router();

const artifactRoutes = require("./artifact.routes/artifact.routes");
const authRoutes = require("./auth.routes/auth.routes");

router.get("/", (req, res) => {
  res
    .status(200)
    .json({
      status: 200,
      success: true,
      message: "Welcome to Artifacts Tracker API!",
    });
});

router.use("/api", artifactRoutes);
router.use("/api/auth", authRoutes);

module.exports = router;
