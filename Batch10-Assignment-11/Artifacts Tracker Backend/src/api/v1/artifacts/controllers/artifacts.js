const Artifact = require("../../../../models/artifact.model/artifact.model");
const User = require("../../../../models/users.model/users.model");

const myArtifacts = async (req, res, next) => {
  try {
    const artifacts = await Artifact.find({ addedBy: req.user.id }).populate(
      "addedBy"
    );
    return res.status(200).json({
      status: 200,
      success: true,
      message: "Artifacts retrieved successfully.",
      data: artifacts,
    });
  } catch (error) {
    next(error);
  }
};

const linkedUnlinkedArtifacts = async (req, res) => {
  try {
    const artifactId = req.params.id;
    const { liked } = req.body; // Get the liked state from the request body

    // Fetch the artifact
    const artifact = await Artifact.findOne({ slug: artifactId });
    const user = await User.findOne({ email: req.user.email });
    console.log(user);
    console.log(artifact);

    if (!artifact) {
      return res.status(404).json({ message: "Artifact not found" });
    }

    // Update the like status
    if (liked) {
      artifact.likes += 1; // Increase like count
      // Add the artifact to the user's liked artifacts if it's not already there
      if (!user.likedArtifacts.includes(artifact._id)) {
        user.likedArtifacts.push(artifact._id);
      }
    } else {
      artifact.likes -= 1; // Decrease like count
      // Remove the artifact ID from the user's liked artifacts
      user.likedArtifacts = user.likedArtifacts.filter(
        (id) => !id.equals(artifact._id) // Use .equals() for ObjectId comparison
      );
    }

    await artifact.save(); // Save updated artifact
    await user.save(); // Save updated artifact

    res.status(200).json({
      success: true,
      likeCount: artifact.likes,
    });
  } catch (error) {
    console.error("Error toggling like", error);
    res.status(500).json({ message: "Server error" });
  }
};

const findAllLikedArtifacts = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });

    const likedArtifacts = user.likedArtifacts;
    const artifacts = await Artifact.find({ _id: { $in: likedArtifacts } });

    console.log(likedArtifacts);
    console.log(artifacts);
    res.status(200).json({
      success: true,
      likedArtifacts,
      artifacts,
    });
  } catch (error) {
    console.error("Error finding liked artifacts", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  myArtifacts,
  linkedUnlinkedArtifacts,
  findAllLikedArtifacts,
};
