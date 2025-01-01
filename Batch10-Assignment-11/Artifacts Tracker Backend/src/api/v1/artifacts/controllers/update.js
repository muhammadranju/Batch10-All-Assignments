const { default: slugify } = require("slugify");
const Artifact = require("../../../../models/artifact.model/artifact.model");
const User = require("../../../../models/users.model/users.model");

const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const {
      artifactName,
      imageUrl,
      artifactType,
      historicalContext,
      createdAt,
      discoveredAt,
      discoveredBy,
      presentLocation,
    } = req.body;

    const artifact = await Artifact.findOne({ slug: id });
    console.log(artifact);

    if (!artifact) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "No artifact found with this id.",
      });
    }

    // if (!req.user || !req.user.email) {
    //   return res.status(400).json({
    //     status: 400,
    //     success: false,
    //     message: "User not authenticated.",
    //   });
    // }

    // const findUser = await User.findOne({ email: req.user.email });

    // if (!findUser) {
    //   return res.status(404).json({
    //     status: 404,
    //     success: false,
    //     message: "User not found.",
    //   });
    // }

    // Update the artifact
    artifact.artifactName = artifactName;
    artifact.imageUrl = imageUrl;
    artifact.artifactType = artifactType;
    artifact.historicalContext = historicalContext;
    artifact.createdAt = createdAt;
    artifact.discoveredAt = discoveredAt;
    artifact.discoveredBy = discoveredBy;
    artifact.presentLocation = presentLocation;
    // artifact.addedBy = findUser._id;
    artifact.slug = slugify(artifactName);

    await artifact.save();

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Artifact updated successfully.",
      data: artifact,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports = update;
