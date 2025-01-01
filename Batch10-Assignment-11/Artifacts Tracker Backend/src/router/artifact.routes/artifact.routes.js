const router = require("express").Router();

const artifactsController = require("../../api/v1/artifacts");
const authMiddleware = require("../../middleware/authMiddleware");

// this route is for creating a new artifact
router.route("/artifacts").post(authMiddleware, artifactsController.create);

// this route is for retrieving all artifacts
router.route("/artifacts").get(artifactsController.findAll);

// this route is for retrieving a single artifact
router
  .route("/artifacts/my-artifacts")
  .get(authMiddleware, artifactsController.myArtifacts);

// this route is for retrieving a single artifact
router.route("/artifacts/:id").get(authMiddleware, artifactsController.findOne);

// this route is for updating an artifact
router.route("/artifacts/:id").put(authMiddleware, artifactsController.update);

// this route is for deleting an artifact
router
  .route("/artifacts/:id")
  .delete(authMiddleware, artifactsController.deleteItem);

// this route is for liking an artifact
router
  .route("/artifacts/:id")
  .patch(authMiddleware, artifactsController.linkedUnlinkedArtifacts);

router
  .route("/artifacts/liked-artifacts/liked")
  .get(authMiddleware, artifactsController.findAllLikedArtifacts);

module.exports = router;
