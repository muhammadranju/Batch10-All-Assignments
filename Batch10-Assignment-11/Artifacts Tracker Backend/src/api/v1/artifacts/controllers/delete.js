const Artifact = require("../../../../models/artifact.model/artifact.model");
const User = require("../../../../models/users.model/users.model");

const deleteItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const artifact = await Artifact.findOne({ slug: id });

    if (!artifact) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "No artifact found with this id.",
      });
    }

    if (!req.user || !req.user.email) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "User not authenticated.",
      });
    }

    const findUser = await User.findOne({ email: req.user.email });

    if (!findUser) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "User not found.",
      });
    }

    // Remove artifact from user's createdArtifacts array
    findUser.createdArtifacts = findUser.createdArtifacts.filter(
      (artifactId) => !artifactId.equals(id)
    );

    await findUser.save(); // Save user updates
    await artifact.deleteOne(); // Delete artifact

    res.status(200).json({
      status: 200,
      success: true,
      message: "Artifact deleted successfully.",
      data: artifact,
    });
  } catch (error) {
    console.error("Error deleting artifact:", error);
    next(error);
  }
};
module.exports = deleteItem;
